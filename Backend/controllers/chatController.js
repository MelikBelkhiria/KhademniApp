const pool = require('../db');
const jwt = require('jsonwebtoken');


exports.sendMessage = (req, res) => {
  const { serviceId, senderId, recipientId, message } = req.body;
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  const query = `
    INSERT INTO chat (service_id, sender_id, recipient_id, message)
    VALUES (?, ?, ?, ?)
  `;
  const params = [serviceId, senderId, recipientId, message];

  pool.query(query, params, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'An error occurred while sending the message' });
    }
    // Store the inserted message ID
    const messageId = result.insertId;
    // Emit the message to the recipient in real-time with the message ID
    const decodedToken = jwt.verify(token, 'your_jwt_secret');
    const userType = decodedToken.userType;
    if (userType==="employer"){
      req.io.to(`${serviceId}_${recipientId}`).emit('receiveMessage', { messageId, serviceId, senderId, recipientId, message });
    }
    else{
      req.io.to(`${serviceId}_${senderId}`).emit('receiveMessage', { messageId, serviceId, senderId, recipientId, message });

    }
  
    res.status(200).json({ message: 'Message sent successfully', messageId });
  });
};
exports.getChatHistory = (req, res) => {
  const { serviceId } = req.params;
  const { applicantId, employerId } = req.query;
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decodedToken = jwt.verify(token, 'your_jwt_secret');
    const userId = decodedToken.id;
    const userType = decodedToken.userType;

    const query = `
      SELECT * FROM chat
      WHERE service_id = ? AND 
      ((sender_id = ? AND recipient_id = ?) OR 
      (sender_id = ? AND recipient_id = ?)) 
      ORDER BY created_at ASC
    `;
    let params;
    if (userType === 'employer') {
      params = [serviceId, userId, applicantId, applicantId, userId];
    } else {
      params = [serviceId, userId, employerId, employerId, userId];
    }

    pool.query(query, params, (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'An error occurred while fetching chat history' });
      }
      res.status(200).json(rows);
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};
