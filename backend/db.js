const mysql = require('mysql2');


// Create MySQL database connection pool
const sql = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  sql.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
    connection.release();
  });


module.exports = sql