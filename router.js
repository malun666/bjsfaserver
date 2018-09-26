const controllers = require('./controllers/index');
const router = require('koa-router')();

router.get('/', (ctx) => {
  ctx.body = 'hi, koa';
});

router.post('/login', controllers.Login.auth)
router.get('/user/:id', controllers.User.getUserById);
router.delete('/user/:id', controllers.User.deleteUserById);
router.post('/user', controllers.User.postUser);
router.put('/user/:id', controllers.User.updateUser);
router.post('/uploadFile', controllers.File.postUploadFile);

module.exports = router;