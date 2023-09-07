/* Creating an API with static data */
const http = require('http');
const data = require('./files/data_json');
http.createServer((req, res)=>{
   
    res.writeHead('200', {'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(4500);  