'use strict';

var express = require('express'),
		router = require('./api'),
		parser = require('body-parser');

var app = express();

require('./database');
require('./seed.js');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function () {
	console.log("Listening on port 3000!");
});