const db = require('../common/db');
const logger = require('../common/log');

module.exports = {
  getUser(ctx) {
    console.log(ctx.params);
    ctx.response.type = 'json';
    ctx.response.body = [{age: 19, name: ctx.params.id}];
  },
  async postUser(ctx, next) {
    ctx.response.type = 'json';
    let user = new db.User(ctx.request.body);
    try {
      let addUser = await user.save();
      ctx.body = addUser;
    } catch (e) {
      ctx.body = {error: '添加失败！'};
      logger.error(e);
    }
  },
  async getUserById(ctx) {
    try {
      let user = await db.User.findById(ctx.params.id);
      ctx.body = user;
    } catch(e) {
      ctx.body = {error: '添加失败！'};
      logger.error(e);
    }
  }
}