const db = require('../db');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    const { email, password } = req.body;
  
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'An error occurred while logging in' });
      }
  
      const user = rows[0];
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      bcrypt.compare(password, user.password_hash, (err, isPasswordValid) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'An error occurred while checking the password' });
        }
  
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
  
        req.session.user = {
          id: user.user_id,
          email: user.email,
          userType: user.user_type
        };
  
        res.status(200).json({ message: 'Login successful', user: req.session.user });
      });
    });
  };
  