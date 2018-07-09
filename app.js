var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var router = express.Router();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/public"));
app.use('/', router);

app.get('/', function (req, res) {

	res.sendFile(__dirname + "/index.html");
});


var server = app.listen(2000, function () {
	console.log('Server started. Listening to connections on port 2000\n');
});

module.exports = app;

