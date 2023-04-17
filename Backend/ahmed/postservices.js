const db = require('../db');
const jwt = require("jsonwebtoken");



exports.postService = (req, res) => {
  const { title, description, domain, location, price, start_time, duration } = req.body;

  const token = req.headers.authorization.split(' ')[1]; // Get the token from the request header
  const decodedToken = jwt.verify(token, "your_jwt_secret");
  const employer_id=decodedToken.id
  const service = {
    employer_id,
    title,
    description,
    domain,
    location,
    price,
    start_time,
    duration
  };

  db.query('INSERT INTO services SET ?', service, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'An error occurred while posting the service' });
    }

    res.status(200).json({ message: 'Service posted successfully', service_id: result.insertId });
  });
};