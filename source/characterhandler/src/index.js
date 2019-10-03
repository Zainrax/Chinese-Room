const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const length = 4;

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

let characters = [];
let answers = [];
let sql = `SELECT * FROM characters ORDER BY RAND ( ) LIMIT 4`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  async function main() {
    const connection = await mysql.createConnection({
      host: "chinese-room-db.cjm0xpvbhlyf.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "easyas123",
      database: "chineseroom"
    });

    const [rows, fields] = await connection.execute(sql);
    return rows;
  }
  characters = [];
  answers = [];

  main()
    .then(res =>
      res.map(chars => {
        characters.push(chars.code);
        answers.push(chars.answer);
      })
    )
    .then(() => {
      res.send({ DATA: characters });
    })
    .then(() => {
      console.log("sent...");
      console.log("chars: " + characters);
    });
});

app.post("/", (req, res) => {
  let submission = req.body.DATA;
  let results = [];
  console.log("Submission: " + submission);
  console.log("Answers: " + answers);
  for (let i = 0; i < submission.length; i++) {
    if (submission[i] === answers[i]) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  res.send({ DATA: results });
});

app.listen(3003);

console.log("Running...");
