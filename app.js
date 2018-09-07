const path = require('path');
const Koa = require('koa');
const app = new Koa();
const serverStatic = require('koa-static2')

// 设置静态目录
app.use(serverStatic('/public', path.join(__dirname, 'public')))

const router = require('./router.js');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3002);