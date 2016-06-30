'use strict';

var express = require('express');

var router = express.Router();

router.get('/todos', function (req, res) {
	res.json({todos: []});
});

//TODO: POST route to add entries

//TODO: PUT route to update entries

//TODO: DELETE route to delete entries

module.exports = router;