const db = require('../db');

exports.updateUserProfile = (req, res) => {
    const { user_id, email, full_name, phone_number, address, interests } = req.body;

    const sql = `UPDATE users SET email = ?, full_name = ?, phone_number = ?, address = ?, interests = ? WHERE user_id = 3`;
    db.query(sql, [email, full_name, phone_number, address, interests, user_id], (err, result) => {
        if (err) throw err;
        console.log(`Profile information updated for user with ID ${user_id}`);
        res.send('Profile information updated successfully');
    });
};

