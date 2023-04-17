const db = require('../db');
const express = require('express');
const router = express.Router();

exports.displayTasks = (req, res) => {
  const q = 'SELECT a.application_id, s.title, u.full_name, a.application_status FROM applications a JOIN services s ON s.service_id = a.service_id JOIN users u ON u.user_id = a.job_seeker_id';
  db.query(q, (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).send('Error querying database');
      return;
    }
    console.log(results)
    res.json(results);
  });
};
