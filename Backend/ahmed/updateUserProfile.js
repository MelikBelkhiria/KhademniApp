const db = require('../db');
const jwt = require("jsonwebtoken");

exports.updateUserProfile = (req, res) => {
  const { email, full_name, phone_number, address, interests, description, profile_pic } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, "your_jwt_secret");
  const user_id = decodedToken.id

  // Convert the base64-encoded image to a Buffer
  const profilePicBuffer = Buffer.from(profile_pic.split(',')[1], 'base64');

  const sql = "UPDATE users SET email = ?, full_name = ?, phone_number = ?, address = ?, interests = ?, description=?, profile_pic=? WHERE user_id = ?";
  db.query(sql, [email, full_name, phone_number, address, interests, description, profilePicBuffer, user_id], (err, result) => {
    if (err) throw err;
    console.log('Profile information updated for user with ID ${user_id}');
    res.send('Profile information updated successfully');
  });
};