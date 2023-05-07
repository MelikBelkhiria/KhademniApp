const db = require('../db');
const jwt = require('jsonwebtoken');

exports.getUserInfo = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'your_jwt_secret');
  const userId = decodedToken.id;

  db.query("SELECT email, full_name, phone_number, address, interests, TO_BASE64(profile_pic) AS profile_pic_base64, created_at, description,user_average FROM users WHERE user_id = ?", [userId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving user information.' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found.' });
      } else {
        const userInfo = {
          email: results[0].email,
          full_name: results[0].full_name,
          phone_number: results[0].phone_number,
          address: results[0].address,
          interests: results[0].interests,
          profile_pic: `data:image/jpg;base64,${results[0].profile_pic_base64}`,
          created_at: results[0].created_at,
          description: results[0].description,
          user_average: results[0].user_average
        };
        res.status(200).json(userInfo);
      }
    }
  });
};