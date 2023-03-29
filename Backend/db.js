const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'scanpower99',
  database: 'khademnifinal',
  waitForConnections: true,
});

module.exports = pool;
/*.*/