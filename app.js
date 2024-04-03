// app.js
const express = require("express");
const mysql = require("mysql");
const apiRouter = require("./api");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "databaseOP",
  database: "student_DB",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Database:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.use("/api", apiRouter);

// Error handling middleware for unauthorized access
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorized access" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = connection;
