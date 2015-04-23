var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
  gallery_id: {type: String, required: true },
  name: String,
  src: {type: String, required: true },
  page_number: {type: Number, required: true },
  created_at: {type: Date, default: Date.now }
});
var image = mongoose.model('Image', imageSchema);

var find = function(callback){
  image.find(callback);
};

var create = function(imageItem, callback){
  if (imageItem.name) {
    image.create(imageItem, callback);
  } else {
    callback("No data to create image");
  }
};

var findById = function(id, callback){
  if (id) {
    image.findById(id, callback);
  } else {
    callback("No data to get image");
  }
};

var findByIdAndUpdate = function(id, imageItem, callback){
  if (id) {
    image.findByIdAndUpdate(id, imageItem, callback);
  } else {
    callback("No data to update image");
  }
  
};

var findByIdAndRemove = function(id, callback){
  if (id) {
    image.findByIdAndRemove(id, callback);
  } else {
    callback("No data to delete image");
  }
};

module.exports = {find: find, create: create, findById: findById, findByIdAndUpdate: findByIdAndUpdate, findByIdAndRemove: findByIdAndRemove};
