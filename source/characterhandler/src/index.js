const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const length = 4;

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "192.168.2.6",
  user: "root",
  password: "password",
  database: "chineseroom"
});

connection.connect(err => {
  if (err) {
    return console.error("Error:" + err.message);
  }

  console.log("Connected to MySQL Server.");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const selectedLetters = [];
  for (let i = 0; i < length; i++) {
    selectedLetters.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  res.send({ DATA: selectedLetters });
  console.log("sent...");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ test: "test" });
});

app.listen(3003);

console.log("Running...");
