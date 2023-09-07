const mysql = require('mysql');

// console.log(mysql);

const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'test'
    }
);

connection.connect(

    (e)=>{

        if(e){
            console.warn("Error");
        }else{
            console.warn("Connected!");
        }
    }
);

connection.query("select * from tbl_user", (e, result)=>{

    if(e){
        console.log(e.message);
    }else{
        console.log(result);
    }


} );