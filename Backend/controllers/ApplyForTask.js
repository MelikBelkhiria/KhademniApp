const db = require('../db');
const jwt = require("jsonwebtoken");

exports.ApplyForTask = (req, res) => {
  const serviceId = req.params.serviceId;
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  console.log(req.headers.authorization);


  if (!authHeader) {
    return res.status(400).json({ message: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  console.log('Token:', token);

  try {
    const decodedToken = jwt.verify(token, 'your_jwt_secret');

    console.log('Decoded Token:', decodedToken);

    const userId = decodedToken.id;

    const q = "INSERT INTO applications (`service_id`, `job_seeker_id`, `application_status`, `created_at`) VALUES (?)";
    const values = [
      serviceId,
      userId,
      "Pending",
      new Date(),
    ];

    db.query(q, [values], (err2, data) => {
      if (err2) {
        console.error(err2);
        return res.json(err2);
      }
      return res.json(data);
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
