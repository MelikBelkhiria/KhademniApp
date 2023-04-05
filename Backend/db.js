const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Melik2002',
  database: 'khademnifinal',
  waitForConnections: true,
});

module.exports = pool;
