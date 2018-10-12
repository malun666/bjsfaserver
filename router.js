const controllers = require('./controllers/index');
const Router = require('koa-router');

let router = new Router({
  prefix: '/api'  // 设置所有的路由的前缀
});

// 自定义的路由规则
router.post('/login', controllers.Login.auth)
router.get('/login/init', controllers.Init.init)
router.post('/uploadFile', controllers.File.postUploadFile);
// 设置自动生成的路由
require('./router_auto')(router);

module.exports = router;