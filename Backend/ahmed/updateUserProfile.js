const db = require('../db');
const jwt = require("jsonwebtoken");


exports.updateUserProfile = (req, res) => {

    const { email, full_name, phone_number, address, interests, description } = req.body;
    const token = req.headers.authorization.split(' ')[1]; // Get the token from the request header
    const decodedToken = jwt.verify(token, "your_jwt_secret");
    const user_id = decodedToken.id
    const sql = `UPDATE users SET email = ?, full_name = ?, phone_number = ?, address = ?, interests = ?, description=? WHERE user_id = ?`;
    db.query(sql, [email, full_name, phone_number, address, interests,  description,user_id], (err, result) => {
        if (err) throw err; 
        console.log(`Profile information updated for user with ID ${user_id}`);
        res.send('Profile information updated successfully');
    });
};

