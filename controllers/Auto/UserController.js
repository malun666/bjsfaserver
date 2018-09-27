const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async postUser(ctx, next) {
    ctx.response.type = 'json';
    let user = new db.User(ctx.request.body);
    try {
      let addUser = await user.save();
      ctx.body = addUser;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getUserById(ctx) {
    try {
      let user = await db.User.findById(ctx.params.id);
      ctx.body = user;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteUserById(ctx) {
    try {
      let user = await db.User.findById(ctx.params.id);
      user.isDel = 1;
      user.save();
      ctx.body = { code: 1, msg: '删除成功', User: user};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateUser(ctx) {
    try {
      let user = await db.User.findById(ctx.params.id);
      Object.assign(user, ctx.request.body);
      user.save();
      ctx.body = { code: 1, msg: '修改成功', User: user};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}