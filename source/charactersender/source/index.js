const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const length = 4;

const express = require("express");
const router = express.Router();

router.listen(3000);

router.get("/", function(req, res, next) {
  const selectedLetters = [];
  for (let i = 0; i < length; i++) {
    selectedLetters.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  res.send(selectedLetters);
  // res.send(send);
});
