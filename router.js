const controllers = require('./controllers/index');
const router = require('koa-router')();

router.get('/', (ctx) => {
  ctx.body = 'hi, koa';
});

router.get('/user/:id', controllers.User.getUser);
module.exports = router;