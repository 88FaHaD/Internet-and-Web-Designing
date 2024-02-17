var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prackru');

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

module.exports = mongoose.model('gameusernames', userschema);
