const db = require('../db');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

exports.displayApplicants = (req, res) => {


  const serviceId = req.params.serviceId;

  const q = `SELECT *, TO_BASE64(profile_pic) AS profile_pic_base64
  FROM khademnifinal.applications a
  JOIN khademnifinal.users u ON u.user_id = a.job_seeker_id
  WHERE a.service_id = ? AND a.application_status != 'rejected'
  `;

  db.query(q, [serviceId], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).send('Error querying database');
      return;
    }
    res.json(results);
  });
};

exports.displayTasks = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;

  const q = `
  SELECT s.*, TO_BASE64(u.profile_pic) AS profile_pic_base64,
    (SELECT 
      CASE 
        WHEN SUM(CASE WHEN application_status = 'accepted' THEN 1 ELSE 0 END) > 0 THEN 'recruited'
        ELSE 'pending'
      END AS service_status
      FROM 
        applications
      WHERE 
        service_id = s.service_id
    ) AS service_status
  FROM services s 
  JOIN users u ON s.employer_id = u.user_id
  WHERE s.employer_id = ?`;
  db.query(q, [userId], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).send('Error querying database');
      return;
    }
    console.log("these are", results)
    res.json(results);
  });
};

exports.ConfirmApplicationStatus = (req, res) => {
  const applicationId = req.params.applicationId;

  const q = `UPDATE khademnifinal.applications
             SET application_status = 'accepted'
             WHERE application_id = ?`;

  db.query(q, [applicationId], (err, results) => {
    if (err) {
      console.error('Error updating database: ', err);
      res.status(500).send('Error updating database');
      return;
    }
    res.json(results);
  });
};

exports.CancelApplicationStatus = (req, res) => {
  const applicationId = req.params.applicationId;

  const q = `UPDATE khademnifinal.applications
             SET application_status = 'rejected'
             WHERE application_id = ?`;

  db.query(q, [applicationId], (err, results) => {
    if (err) {
      console.error('Error updating database: ', err);
      res.status(500).send('Error updating database');
      return;
    }
    res.json(results);
  });
};
