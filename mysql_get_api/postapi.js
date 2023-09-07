const conn = require("./connection");
const express = require("express");
const app = express();


app.use(express.json());

app.post("/postapi", (req, res) => {
  //res.send("route done");
//   data = {
//     name: "john",
//     email: "john@gmail.com",
//     phone: "989898989",
//     birthdate: "11-11-1986",
//   };

const data = req.body;
  conn.query("insert into tbl_user SET?", data, (error, result) => {
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
