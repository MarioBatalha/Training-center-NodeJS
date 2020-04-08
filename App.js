//Module
const sumFunc = require('./Module/soma');

console.log(sumFunc(12,5));

//HTTP server using Node
var http = require('http');

http.createServer(function(req, res){
    res.end('Hi')
}).listen(8081);
console.log('server is working');
