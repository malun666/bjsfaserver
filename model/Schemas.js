const mongoose = require('mongoose');
exports.User = new mongoose.Schema({
  Name: { required: true, type: String, trim: true},
  PNO: {required: true, type: String, trim: true},
  Passwd: { required: true, type: String, trim: true},
  CNO: String,
  Avatar: String,
  CName: String,
  Phone: String,
  SubTitle: {type: String, default: 'aicoder！美好的一天又开始了！'},
  LastLoginDate: { type: Date, default: Date.now},
  Department: mongoose.Schema.Types.ObjectId,
  isDel: { type: Boolean, default: false}
});

// 部门信息表
exports.Department = new mongoose.Schema({
  DepartmentName: {required: true, type: String, trim: true},
  DNO: String,
  SubTitle: String,
  Avatar: String,
});

// 商品信息
exports.Product = new mongoose.Schema({
  PName: {required: true, type: String, trim: true},
  PNO: String,
  Stock: {type: Number, min: 0, default: 1000}
});

// 商铺的信息
exports.Shop = new mongoose.Schema({
  SName: {required: true, type: String, trim: true},
  Address: String,
  Position: String,
  SNO: String,
  Address: String,
  Area: String,
  Phone: String,
  Master: String,
  Photoes: String,
  DistributionChannels: String,
  UserId: mongoose.Schema.Types.ObjectId
});

// 消息  
exports.Message = new mongoose.Schema({
  Content: {required: true, type: String, trim: true},
  Title: String,
  SubOn: String,
  Readed: Boolean,
  From: mongoose.Schema.Types.ObjectId,
  To: mongoose.Schema.Types.ObjectId,
  MsgType: {type: Number, default: 1},
  Img: String
});

// 菜单
exports.Menu = new mongoose.Schema({
  MenuName: {required: true, type: String, trim: true},
  Url: String
});
