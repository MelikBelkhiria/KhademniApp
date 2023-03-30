const bcrypt = require('bcrypt');
const db = require('../db'); // Import your database connection, adjust the path if needed

exports.registerUser = async (req, res) => {
    const { email, fullName, userType, phoneNumber, password } = req.body;

    // Validate input (you can add more validation if needed)
    if (!email || !fullName || !userType || !password) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    try {
        // Check if email is already registered
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        db.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: 'An error occurred while checking if the email exists' });
            } else {
                if (result.length > 0) {
                    return res.status(409).send({ message: 'Email is already registered' });
                } else {
                    // Hash the password
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send({ message: 'An error occurred while generating salt for password hashing' });
                        } else {
                            bcrypt.hash(password, salt, (err, hashedPassword) => {
                                if (err) {
                                    console.error(err);
                                    res.status(500).send({ message: 'An error occurred while hashing the password' });
                                } else {
                                    // Save the user to the database
                                    const insertQuery = `INSERT INTO users (email, full_name, user_type, phone_number, password_hash) VALUES ('${email}', '${fullName}', '${userType}', '${phoneNumber}', '${hashedPassword}')`;
                                    db.query(insertQuery, (err, result) => {
                                        if (err) {
                                            console.error(err);
                                            res.status(500).send({ message: 'An error occurred while registering the user', error: err });
                                        } else {
                                            res.status(201).send({ message: 'User registered successfully', user_id: result.insertId });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred while registering the user' });
    }
};
