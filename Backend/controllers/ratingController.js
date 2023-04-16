const db = require("../db");
const jwt = require("jsonwebtoken");

exports.submitRating = async (req, res) => {
    const { rating, feedback, service_id } = req.body;
    const token = req.headers.authorization.split(' ')[1]; // Get the token from the request header
    const decodedToken = jwt.verify(token, "your_jwt_secret");
    const { userType, id } = decodedToken;

    const isEmployer = userType === "employer";
    const ratingColumn = isEmployer ? "star_rating_employer" : "star_rating_job_seeker";
    const messageColumn = isEmployer ? "message_rating_employer" : "message_rating_job_seeker";
    const userColumn = isEmployer ? "employer_id" : "job_seeker_id";

    const checkQuery = `SELECT * FROM ratings WHERE service_id = ?`;
    db.query(checkQuery, [service_id], (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            const insertQuery = `INSERT INTO ratings (service_id, ${userColumn}, ${ratingColumn}, ${messageColumn}, created_at) VALUES (?, ?, ?, ?, NOW())`;
            db.query(insertQuery, [service_id, id, rating, feedback], (err, result) => {
                if (err) throw err;
                res.status(201).json({ message: "Rating submitted successfully." });
            });
        } else {
            const updateQuery = `UPDATE ratings SET ${userColumn} = ?, ${ratingColumn} = ?, ${messageColumn} = ? WHERE service_id = ?`;
            db.query(updateQuery, [id, rating, feedback, service_id], (err, result) => {
                if (err) throw err;
                res.status(200).json({ message: "Rating updated successfully." });
            });
        }
    });
};
