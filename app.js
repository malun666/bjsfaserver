const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const serverStatic = require('koa-static2');
const logger = require('koa-logger');
const cors = require('koa-cors');
const koaJwt = require('koa-jwt'); //路由权限控制
const jwt = require('jwt-simple');

const router = require('./router.js');

// 配置mogondb的所有的模型
const db = require('./common/db');
const app = new Koa();
const loggerWriter = require('./common/log');

app.use(
  logger((str, args) => {
    // loggerWriter.debug(`${args[1]} ${args[2]} 状态码：${args[3]} 用时：${args[4]} 数据大小: ${args[5]}`);
  })
);

// 设置静态目录
app.use(serverStatic('/pub', path.join(__dirname, 'public')));
// 设置允许跨域
app.use(cors());

// 设置koabody解析的相关配置
app.use(
  koaBody({
    multipart: true,
    formidable: {
      onFileBegin: (name, file) => {},
      keepExtensions: false,
      uploadDir: path.join(__dirname, 'upload'),
      hash: 'md5'
    }
  })
);

// #region 鉴权
const jwtSecret = 'aicoder_com_ful';


// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next) {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});

app.use(
  koaJwt({ secret: jwtSecret }).unless({
    path: [/^\/login/]
  })
);

// #endregion

// 启用路由配置
app.use(router.routes());
app.use(router.allowedMethods());

// 异常处理
app.on('error', function(err) {
  loggerWriter.error(err);
});

app.listen(3002);
