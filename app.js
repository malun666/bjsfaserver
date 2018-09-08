const path = require('path');
const Koa = require('koa');
const app = new Koa();
const serverStatic = require('koa-static2')

const logger = require('koa-logger');
const loggerWriter = require('./common/log');

app.use(logger((str, args) => {
  // loggerWriter.debug(`${args[1]} ${args[2]} 状态码：${args[3]} 用时：${args[4]} 数据大小: ${args[5]}`);
}));

// 设置静态目录
app.use(serverStatic('/public', path.join(__dirname, 'public')))

const router = require('./router.js');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);