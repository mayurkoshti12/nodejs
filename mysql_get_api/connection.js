const mysql = require('mysql');


const conn = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'test'

});

conn.connect((e)=>{

    if(e){
        console.log(e.message);
    }
});

module.exports = conn;
