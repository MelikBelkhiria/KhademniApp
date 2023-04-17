const db = require('../db');
const jwt = require('jsonwebtoken');

const getUserNotifications = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization token is missing' });
    }

    const decodedToken = jwt.verify(token, 'your_jwt_secret');
    const userId = decodedToken.id;
    const userType = decodedToken.userType;

    let query;
    let params;

    if (userType === 'job_seeker') {
      query = `
      SELECT applications.application_id,services.service_id, services.employer_id, users.full_name AS employer_name, services.title, applications.application_status, applications.created_at, users.profile_pic
      FROM applications
      JOIN services ON applications.service_id = services.service_id
      JOIN users ON services.employer_id = users.user_id
      WHERE applications.job_seeker_id = ? AND users.user_type = 'employer' AND applications.application_status IN ('accepted','rejected')
      
      `;
      params = [userId];
    } else if (userType === 'employer') {
      query = `
        SELECT applications.application_id, applications.job_seeker_id,services.service_id, services.title, applications.application_status, applications.created_at, users.profile_pic, users.full_name
        FROM applications
        JOIN services ON applications.service_id = services.service_id
        JOIN users ON applications.job_seeker_id = users.user_id
        WHERE services.employer_id = ? AND users.user_type = 'job_seeker' AND applications.application_status IN ('accepted','pending')
      `;
      params = [userId];
    } else {
      return res.status(401).json({ message: 'User is not authorized to view notifications' });
    }
    console.log(query,params)
    let rows;
    try {
      rows = await new Promise((resolve, reject) => {
        db.query(query, params, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    } catch (error) {
      console.error('Error in getUserNotifications:', error);
      throw error;
    }
    

    const notifications = rows.map((notification) => {
      let message = '';
      let title = '';
      let type='';
      console.log(notification)
      if (userType === 'job_seeker') {
        switch (notification.application_status) {
          case 'accepted':
            title = 'Application accepted';
            message = 'Your application for '+notification.title+' has been accepted! Click to rate.';
            type='rating'
            break;
          case 'rejected':
            title = 'Application rejected';
            message = 'Your application for '+notification.title+' has been rejected';
            break;
          default:
            console.log("Unexpected application status:", notification.application_status);

            break;
        }
        return {
          id: notification.application_id,
          pic: notification.profile_pic,
          title,
          message,
          date: notification.created_at,
          service_id:notification.service_id,
          type
        };
      } else if (userType === 'employer') {
        switch (notification.application_status) {
          case 'pending':
            title= `Application`
            message = `${notification.full_name} applied to your service `+notification.title;
            break;
          case 'accepted':
            title = 'Application Accepted';
            message = 'You accepted an application for '+notification.title+' click to rate.';
            type='rating'
            break;
          default:
            console.log("Unexpected application status:", notification.application_status);

            break;
        }
        return {
          id: notification.application_id,
          pic: notification.profile_pic,
          title,
          message,
          date: notification.created_at,
          type,
          service_id:notification.service_id
        };
      }
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error in getUserNotifications:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserNotifications };
