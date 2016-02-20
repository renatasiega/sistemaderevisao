// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = module.exports.app = exports.app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, resp){
  resp.sendfile('index.html');
});

app.use(express.static('./app'));
app.use(express.static('./node_modules'));

app.listen(3000, function () {
    console.log('now listening on http://localhost:3000');
});
