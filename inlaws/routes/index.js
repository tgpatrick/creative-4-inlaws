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

router.get('/edit', function(req, res, next) {
  res.render('index', {
    title: 'Whatserface - Edit'
  });
});

router.get('/api/inlaws', function(req, res, next) {
  Inlaw.find(function(err, inlaws) {
    if (err) {
      return next(err);
    }
    res.json(inlaws);
  });
});

router.post('/api/inlaws', function(req, res, next) {
  var inlaw = new Inlaw(req.body);
  inlaw.save(function(err, inlaw) {
    if (err) {
      return next(err);
    }
    res.json(inlaw);
  });
});

router.param('inlaw', function(req, res, next, id) {
  var query = Inlaw.findById(id);
  query.exec(function(err, inlaw) {
    if (err) {
      return next(err);
    }
    if (!inlaw) {
      return next(new Error("can't find inlaw"));
    }
    req.inlaw = inlaw;
    return next();
  });
});

router.get('/api/inlaws/:inlaw', function(req, res) {
  res.json(req.inlaw);
});

router.put('/api/inlaws/:id', async (req, res) => {
  try {
    let inlaw = await Inlaw.findOne({
      _id: req.params.id
    });
    inlaw.name = req.body.name;
    inlaw.relation = req.body.relation;
    inlaw.birthday = req.body.birthday;
    inlaw.hobbies = req.body.hobbies;
    inlaw.notes = req.body.notes;
    await inlaw.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/api/inlaws/:id', async (req, res) => {
  try {
    await Inlaw.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

module.exports = router;