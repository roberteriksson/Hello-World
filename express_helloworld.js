/*var express = require('express');
var app = express();
//app.createServer();
app.get('/', function(req, res) {res.send("Hej!");});
*/
var app = require('express').createServer();
app.get('/', function(req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Listening on port 3000");
});
