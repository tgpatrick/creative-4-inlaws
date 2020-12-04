var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Inlaw = mongoose.model('Inlaw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Whatserface'
  });
});

router.get('/inlaws', function(req, res, next) {
  Inlaw.find(function(err, inlaws) {
    if (err) {
      return next(err);
    }
    res.json(inlaws);
  });
});

router.post('/inlaws', function(req, res, next) {
  var inlaw = new Inlaw(req.body);
  inlaw.save(function(err, inlaw) {
    if (err) {
      return next(err);
    }
    res.json(inlaw);
  });
});

module.exports = router;