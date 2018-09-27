const gulp = require('gulp');
const template = require('art-template');
const path = require('path');
const fs = require('fs');
const clean = require('gulp-clean');
let models = require('./model/Schemas');


gulp.task('clean', function() {
  return gulp.src(['./controllers/Auto/**/*.js', './router_auto.js'], {read: false})
  .pipe(clean({force: true}));
});

gulp.task('automodel',['clean'], function() {
  delete require.cache[require.resolve('./model/Schemas')];
  let models = require('./model/Schemas');

  let AutoPath = path.join(__dirname, './controllers/Auto/');
  if(!fs.existsSync(AutoPath)) {
    fs.mkdirSync(AutoPath);
  }
  const controllerTplFile = path.join(__dirname, './util/controller_art_tpl/controller.tpl')
  // 生成 cotroller文件和controller_wrap文件
  for (let modelName of Object.keys(models)) {
    // 内部自动生成的文件
    let controllerFileContent = compileArtTemplate(controllerTplFile, {Name: modelName, lowerCaseName: modelName.toLowerCase()})
    fs.writeFileSync(path.join(__dirname, './controllers/Auto/' + modelName +'Controller.js'), controllerFileContent, {encoding: 'utf8'})

    // 外层的wrap文件
    let controllerWrapTpl = path.join(__dirname, './util/controller_art_tpl/controller_wrap.tpl');
    let controllerWrapFilePath = path.join(__dirname, './controllers/' + modelName +'Controller.js');

    if(!fs.existsSync(controllerWrapFilePath)) {
      let wrapJsCode = compileArtTemplate(controllerWrapTpl, {Name: modelName});
      fs.writeFileSync(controllerWrapFilePath, wrapJsCode, {encoding:'utf8', flag:'w+'})
    }
  }

  // 生产路由文件
  let routeFile = path.join(__dirname, './router_auto.js');
  let routeTpl = path.join(__dirname, './util/router_art.tpl');
  let routeFileData = compileArtTemplate(routeTpl, {NameArray: Array.from(Object.keys(models))});
  fs.writeFileSync(routeFile, routeFileData, {encoding: 'utf8', flag: 'w+'} )

});

gulp.task('default', function() {
  gulp.watch(['model/**/*.*', 'util/**/*.tpl'], ['automodel']);
});

function compileArtTemplate(file, data) {
  return template(file, data);
}
