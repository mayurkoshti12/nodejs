const conn = require("./connection");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //res.send("route done");
  conn.query("select * from tbl_user", (error, result) => {
    if (error) {
      //console.warn(error.message);
      res.send("Something went wrong!");
    } else {
      //console.log(result);
      res.send(result);
      //conn.end();
    }
  });
});

app.listen(4500);
