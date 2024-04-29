const pool = require('../../db');

let tableName = 'PersonInfo'


// -- Create the PersonInfo table
// CREATE TABLE PersonInfo (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(50),
//     age INT,
//     country VARCHAR(50),
//     mobile VARCHAR(20),
//     email VARCHAR(100)
// );

// -- Insert multiple rows into the PersonInfo table
// INSERT INTO PersonInfo (name, age, country, mobile, email)
// VALUES 
//     ('John Smith', 35, 'USA', '+1-555-0123', 'john.smith@email.com'),
//     ('Emma Johnson', 28, 'Canada', '+1-555-0456', 'emma.johnson@email.com'),
//     ('Michael Brown', 42, 'UK', '+44-20-1234-5678', 'michael.brown@email.com'),
//     ('Ava Gonzalez', 31, 'Spain', '+34-6-7890-1234', 'ava.gonzalez@email.com'),
//     ('Daniel Kim', 25, 'South Korea', '+82-10-1234-5678', 'daniel.kim@email.com'),
//     ('Sophia Martinez', 29, 'Mexico', '+52-55-1234-5678', 'sophia.martinez@email.com'),
//     ('Mohammed Khan', 38, 'India', '+91-9876543210', 'mohammed.khan@email.com'),
//     ('Olga Petrova', 33, 'Russia', '+7-999-876-5432', 'olga.petrova@email.com'),
//     ('Chen Wei', 27, 'China', '+86-13800138000', 'chen.wei@email.com'),
//     ('Luca Bianchi', 30, 'Italy', '+39-333-1234567', 'luca.bianchi@email.com'),
//     ('Emily Wilson', 26, 'Australia', '+61-4-1234-5678', 'emily.wilson@email.com'),
//     ('Ahmed Hassan', 34, 'Egypt', '+20-10-1234-5678', 'ahmed.hassan@email.com'),
//     ('Yuki Tanaka', 32, 'Japan', '+81-90-1234-5678', 'yuki.tanaka@email.com'),
//     ('Marta Fernandez', 39, 'Spain', '+34-6-9012-3456', 'marta.fernandez@email.com'),
//     ('Carlos Silva', 36, 'Brazil', '+55-11-1234-5678', 'carlos.silva@email.com'),
//     ('Anna Nowak', 29, 'Poland', '+48-500-123-456', 'anna.nowak@email.com'),
//     ('David Garcia', 41, 'Spain', '+34-6-7890-1234', 'david.garcia@email.com'),
//     ('Kim Min-jun', 27, 'South Korea', '+82-10-5678-1234', 'kim.minjun@email.com'),
//     ('Federico Rossi', 33, 'Italy', '+39-333-7654321', 'federico.rossi@email.com'),
//     ('Luis Hernandez', 30, 'Mexico', '+52-55-6789-0123', 'luis.hernandez@email.com'),
//     ('Sofia Petrov', 31, 'Russia', '+7-999-543-8765', 'sofia.petrov@email.com'),
//     ('Zhang Wei', 29, 'China', '+86-13900139000', 'zhang.wei@email.com'),
//     ('Giulia Bianchi', 28, 'Italy', '+39-333-9876543', 'giulia.bianchi@email.com'),
//     ('Alexandre Martin', 39, 'France', '+33-6-1234-5678', 'alexandre.martin@email.com'),
//     ('Ananya Gupta', 26, 'India', '+91-9876543210', 'ananya.gupta@email.com'),
//     ('Elena Ivanova', 35, 'Russia', '+7-999-234-5678', 'elena.ivanova@email.com'),
//     ('Huang Wei', 31, 'China', '+86-13700137000', 'huang.wei@email.com'),
//     ('Luigi Ferrari', 37, 'Italy', '+39-333-6543210', 'luigi.ferrari@email.com'),
//     ('Sarah Johnson', 28, 'USA', '+1-555-6789', 'sarah.johnson@email.com');


const getAllUsers = async (columnName, columnValue) => {
  return new Promise((resolve, reject) => {
    let sqlQuery = `SELECT * FROM PersonInfo`;

  
    if (columnName && columnValue) {
      sqlQuery += ` WHERE ${columnName} LIKE ?`;
    }

    
    sqlQuery += ` ORDER BY id DESC`;

  
    pool.query(sqlQuery, [`%${columnValue}%`], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
          // console.log('results', results)
        resolve(results);
      }
    });
  });
}


module.exports.getAllUsers = getAllUsers