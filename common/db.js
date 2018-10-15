const path = require('path');
const fs = require('fs');
const logger = require('../common/log');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sfaserver');
// mongoose.connect('mongodb://admin:aicoder_com@127.0.0.1:27021/bjsfa');
const db = mongoose.connection;
db.on('error', function(error) {
  logger.error(error);
  console.log('mongod 链接失败,请打开mongodb服务,重启此服务!');
  console.log(`错误消息:\r\n${error}`);
});

let models = {};
db.once('open', function() {
  let schemas = require('../model/Schemas.js');
  for(prop of Object.keys(schemas)) {
    models[prop] = mongoose.model(prop, schemas[prop]);
  }
});

module.exports = models;