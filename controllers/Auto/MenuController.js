const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async postMenu(ctx, next) {
    ctx.response.type = 'json';
    let menu = new db.Menu(ctx.request.body);
    try {
      let addMenu = await menu.save();
      ctx.body = addMenu;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getMenuById(ctx) {
    try {
      let menu = await db.Menu.findById(ctx.params.id);
      ctx.body = menu;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteMenuById(ctx) {
    try {
      let menu = await db.Menu.findById(ctx.params.id);
      menu.isDel = 1;
      menu.save();
      ctx.body = { code: 1, msg: '删除成功', Menu: menu};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateMenu(ctx) {
    try {
      let menu = await db.Menu.findById(ctx.params.id);
      Object.assign(menu, ctx.request.body);
      menu.save();
      ctx.body = { code: 1, msg: '修改成功', Menu: menu};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}