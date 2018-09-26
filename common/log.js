const log4js = require('log4js');
log4js.configure({
  appenders:{
    file: {
      type: 'dateFile',
      pattern: 'yyyy_MM_dd',
      filename: 'app.log',
      keepFileExt: true
    }
  },
  categories: { default: {appenders: ['file'], level: 'debug'}}
});

module.exports = log4js.getLogger('app');   