const express = require("express");

const app = express();

const route = express.Router();

/* Middleware */
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        
        res.send("Please provide age");

    }else{

        next();
    }

    //console.log(reqFilter);

};

// Applied app specific filter/middleware
//app.use(reqFilter);

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to home page!");
  
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page!");
  
});

// For specific router
/* app.get("/user", reqFilter, (req, res) => {
  res.send("Welcome to user page!");
}); */
route.get("/user", (req, res) => {
  res.send("Welcome to user page!");
});


// For specific router
/* app.get("/contact", reqFilter, (req, res) => {
  res.send("Welcome to contact page!");
}); */

route.get("/contact", (req, res) => {
  res.send("Welcome to contact page!");
});

// For applying group routing
app.use('/', route);

app.listen(4500);
