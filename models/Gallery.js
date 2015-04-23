var mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema({
  name: {type: String, required: true },
  created_at: { type: Date, default: Date.now }
});
var gallery = mongoose.model('Gallery', gallerySchema);

var find = function(callback){
  gallery.find(callback);
};

var create = function(galleryItem, callback){
  if (galleryItem.name) {
    gallery.create(galleryItem, callback);
  } else {
    callback("No data to create gallery");
  }
};

var findById = function(id, callback){
  if (id) {
    gallery.findById(id, callback);
  } else {
    callback("No data to get gallery");
  }
};

var findByIdAndUpdate = function(id, galleryItem, callback){
  if (id) {
    gallery.findByIdAndUpdate(id, galleryItem, callback);
  } else {
    callback("No data to update gallery");
  }
  
};

var findByIdAndRemove = function(id, callback){
  if (id) {
    gallery.findByIdAndRemove(id, callback);
  } else {
    callback("No data to delete gallery");
  }
};

module.exports = {find: find, create: create, findById: findById, findByIdAndUpdate: findByIdAndUpdate, findByIdAndRemove: findByIdAndRemove};
