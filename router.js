const controllers = require('./controllers/index');
const router = require('koa-router')();

router.get('/', (ctx) => {
  ctx.body = 'hi, koa';
});

router.post('/login', controllers.Login.auth)
router.get('/user/:id', controllers.User.getUserById);
router.post('/user', controllers.User.postUser);
router.post('/uploadFile', controllers.File.postUploadFile);

module.exports = router;