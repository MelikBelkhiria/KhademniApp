const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '24700337',
  database: 'khademnifinal',
  waitForConnections: true,
});

module.exports = pool;
