const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const serverStatic = require('koa-static2')
const logger = require('koa-logger');
var cors = require('koa-cors');

const app = new Koa();
const loggerWriter = require('./common/log');

app.use(logger((str, args) => {
  // loggerWriter.debug(`${args[1]} ${args[2]} 状态码：${args[3]} 用时：${args[4]} 数据大小: ${args[5]}`);
}));

// 设置静态目录
app.use(serverStatic('/pub', path.join(__dirname, 'public')))
// 设置允许跨域
app.use(cors());

const router = require('./router.js');

app.use(koaBody({multipart:true, formidable: {onFileBegin: (name, file)=>{
  console.log(name, file);
},keepExtensions: true, uploadDir: path.join(__dirname,'upload'), hash: 'md5'}}));

app.use(router.routes());
app.use(router.allowedMethods());

// 异常处理
app.on('error', function(err) {
  console.log('logging error ', err.message);
  loggerWriter.error(err);
});

app.listen(3002);