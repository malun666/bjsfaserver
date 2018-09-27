const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async postMessage(ctx, next) {
    ctx.response.type = 'json';
    let message = new db.Message(ctx.request.body);
    try {
      let addMessage = await message.save();
      ctx.body = addMessage;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getMessageById(ctx) {
    try {
      let message = await db.Message.findById(ctx.params.id);
      ctx.body = message;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteMessageById(ctx) {
    try {
      let message = await db.Message.findById(ctx.params.id);
      message.isDel = 1;
      message.save();
      ctx.body = { code: 1, msg: '删除成功', Message: message};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateMessage(ctx) {
    try {
      let message = await db.Message.findById(ctx.params.id);
      Object.assign(message, ctx.request.body);
      message.save();
      ctx.body = { code: 1, msg: '修改成功', Message: message};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}