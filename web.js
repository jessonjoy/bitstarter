#!/usr/bin/env node
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var msg = fs.readFileSync("index.html");
var buf = new Buffer(msg);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

console.log(buf.toString());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
