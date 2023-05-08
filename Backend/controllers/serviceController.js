// serviceController.js
const db = require('../db');
const jwt = require('jsonwebtoken');

exports.getServicesForUser = (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const decodedToken = jwt.verify(token, 'your_jwt_secret');
        const userId = decodedToken.id;
        const userType = decodedToken.userType;

        let query;
        let params;

        if (userType === 'employer') {
            // For employer users, get all services created by the employer with at least one application
            query = `
            SELECT s.*, u.full_name AS applicant_name, TO_BASE64(u.profile_pic) AS applicant_profile_pic, a.job_seeker_id, a.application_status, a.service_id
            FROM services s 
            JOIN applications a ON s.service_id = a.service_id
            JOIN users u ON a.job_seeker_id = u.user_id
            WHERE s.employer_id = ?
            
        `;
            params = [userId];
        } else if (userType === 'job_seeker') {
            // For job seeker users, get all services with a pending or accepted application from the applications table
            query = `
          SELECT s.*, u.full_name AS employer_name, TO_BASE64(u.profile_pic) AS employer_profile_pic, a.application_status 
          FROM services s 
          JOIN applications a ON s.service_id = a.service_id
          JOIN users u ON s.employer_id = u.user_id
          WHERE a.job_seeker_id = ? AND a.application_status IN (?, ?)
        `;
            params = [userId, 'pending', 'accepted'];
        } else {
            // If userType is not employer or job_seeker, return a 401 Unauthorized error
            return res.status(401).json({ message: 'User is not authorized to view services' });
        }


        db.query(query, params, (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'An error occurred while getting services' });
            }

            // Group services by service_id
            const groupedServices = {};
            rows.forEach((row) => {
                if (!groupedServices[row.service_id]) {
                    groupedServices[row.service_id] = {
                        ...row,
                        applicants: [],
                    };
                }
                groupedServices[row.service_id].applicants.push({
                    job_seeker_id: row.job_seeker_id,
                    applicant_name: row.applicant_name,
                    applicant_profile_pic: `data:image/jpg;base64,${row.applicant_profile_pic}`,
                    application_status: row.application_status,
                    service_id: row.service_id,
                    employer_name:row.employer_name,
                    employer_profile_pic:`data:image/jpg;base64,${row.employer_profile_pic}`,
                    employer_id:row.employer_id
                });
            });

            // Convert groupedServices to an array
            const servicesArray = Object.values(groupedServices);

            res.status(200).json(servicesArray);
        });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Invalid authorization token' });
    }
};

