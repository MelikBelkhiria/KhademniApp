const db = require('../db');

exports.displayTasks = (req,res) => {
 const q ='SELECT service_id, employer_id, title, description, location, price FROM services';
 db.query(q, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).send('Error querying database');
      return;
    }
    res.json(results);
  });
}