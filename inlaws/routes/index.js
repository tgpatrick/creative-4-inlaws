var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Inlaw = mongoose.model('Inlaw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Whatserface'
  });
});

module.exports = router;