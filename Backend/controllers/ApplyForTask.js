const db = require('../db');
const jwt = require("jsonwebtoken");

exports.ApplyForTask = (req,res) => {
  const serviceId = req.params.serviceId;
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing or invalid token' });
  }    
 
  try {
    const decodedToken = jwt.verify(token, 'your_jwt_secret');
    const userId = decodedToken.id;

    const q = "INSERT INTO application (`service_id`, `job_seeker_id`, `application_status`, `created_at`) VALUES (?)";
    const values = [
      serviceId,
      userId,
      "Pending",
      new Date(),
    ];
    
    db.query(q, [values], (err2, data) => {
      if (err2) {
        return res.json(err2);
      }
      return res.json(data);
    });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
