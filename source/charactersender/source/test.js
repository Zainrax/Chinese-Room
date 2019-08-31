const fetch = require("node-fetch");

fetch("http://localhost:3000/")
  .then(res => {
    return res.json();
  })
  .then(jsn => {
    console.log(JSON.stringify(jsn));
  });
