'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
	name: String,
	completed: Boolean
});


var model = mongoose.model('Todo', todoSchema);
debugger;

module.exports = model;