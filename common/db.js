const path = require('path');
const fs = require('fs');
const logger = require('../common/log');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sfaserver');
const db = mongoose.connection;
db.on('error', function(error) {
  logger.error(error);
});

let models = {};
db.once('open', function() {
  let schemas = require('../model/schemas');
  for(prop of Object.keys(schemas)) {
    models[prop] = mongoose.model(prop, schemas[prop]);
  }
});

module.exports = models;