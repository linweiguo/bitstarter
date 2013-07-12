var fs=require('fs');
var infile="index.html";
var outbuffer=new Buffer(40);

outbuffer = fs.readFileSync(infile);
var outstring = outbuffer.toString();

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(outstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
