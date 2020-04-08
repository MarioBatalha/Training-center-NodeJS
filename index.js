
//Moudle
const express = require('express');
const app = express();

//Route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/asset/index.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/asset/about.html');
});

app.get('/blog', function(req, res){
    res.sendFile(__dirname + '/asset/blog.html');
});

app.get('/hello/:position/:name', function(req, res){
    //res.send(req.params);
    res.send('Hi '+req.params.name);
});

//HTTP server
app.listen(8081, function(){
    console.log('server is working');
});