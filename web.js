#!/usr/bin/env node
var fs = require('fs');

var express = require('express');
var app = express.createServer(express.logger());
var msg = fs.readFileSync("index.html");
var b = new Buffer(msg);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
