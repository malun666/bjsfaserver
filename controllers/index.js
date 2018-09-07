const fs = require('fs');
const path = require('path');

let controllers = {};
let files = fs.readdirSync(__dirname);
let exp = /.+Controller\.js$/gi;
files.forEach((item, index) => {
  if(exp.test(item)) {
    let controllerName = item.replace('Controller.js', '').trim();
    controllers[controllerName] = require(path.join(__dirname, item));
  }
});
module.exports = controllers;
