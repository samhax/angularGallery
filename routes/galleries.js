var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Gallery = require('../models/Gallery.js');

/* GET /gallery listing. */
router.get('/', function(req, res, next) {
  Gallery.find(function (err, gallery) {
    if (err) return next(err);
    res.json(gallery);
  });
});

/* POST /gallery */
router.post('/', function(req, res, next) {
  Gallery.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /gallery/id */
router.get('/:id', function(req, res, next) {
  Gallery.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /gallery/:id */
router.put('/:id', function(req, res, next) {
  Gallery.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /gallery/:id */
router.delete('/:id', function(req, res, next) {
  Gallery.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
