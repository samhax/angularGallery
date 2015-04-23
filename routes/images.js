var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
var crypto = require('crypto');

var uploadDirectory = __dirname + "\\..\\public\\images\\";
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

/* GET /image listing. */
router.get('/', function(req, res, next) {
  Image.find(function(err, image) {
    if (err)
      return next(err);
    res.json(image);
  });
});

/* POST /image */
router.post('/', function(req, res, next) {
  var form = new multiparty.Form({
    uploadDir : uploadDirectory
  });

  form.parse(req, function(err, fields, files) {
    Image.create(req.body, function(err, post) {
      if (err)
        return next(err);
      res.json(post);
    });
  });

});

/* GET /image/id */
router.get('/:id', function(req, res, next) {
  Image.findById(req.params.id, function(err, post) {
    if (err)
      return next(err);
    res.json(post);
  });
});

/* PUT /image/:id */
router.put('/:id', function(req, res, next) {
  Image.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err)
      return next(err);
    res.json(post);
  });
});

/* DELETE /image/:id */
router.delete('/:id', function(req, res, next) {
  Image.findByIdAndRemove(req.params.id, function(err, post) {
    if (err)
      return next(err);
    res.json(post);
  });
});

module.exports = router;
