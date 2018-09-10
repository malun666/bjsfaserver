const controllers = require('./controllers/index');
const router = require('koa-router')();

console.log(controllers)
router.get('/', (ctx) => {
  ctx.body = 'hi, koa';
});

router.get('/user/:id', controllers.User.getUser);
router.post('/user', controllers.User.postUser);
router.post('/uploadFile', controllers.File.postUploadFile);

module.exports = router;