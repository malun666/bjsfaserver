const fs = require('fs');
const path = require('path');

let controllers = {};
let files = fs.readdirSync(__dirname);
let exp = /.+Controller\.js$/g;
files.forEach((item, index) => {
  exp.lastIndex = 0;
  if(exp.test(item)) {
    let controllerName = item.replace('Controller.js', '').trim();
    controllers[controllerName] = require(path.join(__dirname, item));
  }
});
module.exports = controllers;
