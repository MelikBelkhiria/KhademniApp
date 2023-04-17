const db = require('../db');



exports.postService = (req, res) => {
  const { employer_id,title, description, domain, location, price, start_time, duration } = req.body;

    
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