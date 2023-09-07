const http = require("http");

http.createServer((req, res) =>
    {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify({name:'Mayur'}));
        res.end();
        
    }
).listen(4500);

const color = require('colors');
console.log("Mayur Koshtis".blue);