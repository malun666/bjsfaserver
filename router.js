const controllers = require('./controllers/index');
// const router = require('koa-router')();
const Router = require('koa-router');

let router = new Router({
  prefix: '/api'
});

router.get('/', (ctx) => {
  ctx.body = 'hi, koa';
});

router.post('/login', controllers.Login.auth)

router.get('/user', controllers.User.getUser);
// router.get('/user/:id', controllers.User.getUserById);
// router.delete('/user/:id', controllers.User.deleteUserById);
// router.post('/user', controllers.User.postUser);
// router.put('/user/:id', controllers.User.updateUser);
// router.patch('/user/:id', controllers.User.updateUser);

router.post('/uploadFile', controllers.File.postUploadFile);

require('./router_auto')(router);

module.exports = router;