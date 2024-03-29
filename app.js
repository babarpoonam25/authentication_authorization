const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "student_DB",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting to database", err);
    return;
  }
  console.log("connected to MYSQL database!!!");
});
module.exports = connection;
