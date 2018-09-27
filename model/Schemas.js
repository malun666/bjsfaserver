const mongoose = require('mongoose');
exports.User = new mongoose.Schema({
  Name: { required: true, type: String, trim: true},
  Passwd: { required: true, type: String, trim: true},
  isDel: { type: Boolean, default: false}
});

exports.Product = new mongoose.Schema({
  PName: {required: true, type: String, trim: true},
  PNO: String,
  Stock: {type: Number, min: 0, default: 1000}
});

exports.Shop = new mongoose.Schema({
  SName: {required: true, type: String, trim: true},
  SNO: String,
  Address: String,
  Phone: String
});
exports.Message = new mongoose.Schema({
  Content: {required: true, type: String, trim: true},
  Title: String,
  SubOn: String,
  Readed: Boolean
});
exports.Menu = new mongoose.Schema({
  MenuName: {required: true, type: String, trim: true},
  Url: String
});
