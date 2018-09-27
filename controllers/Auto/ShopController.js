const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async postShop(ctx, next) {
    ctx.response.type = 'json';
    let shop = new db.Shop(ctx.request.body);
    try {
      let addShop = await shop.save();
      ctx.body = addShop;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getShopById(ctx) {
    try {
      let shop = await db.Shop.findById(ctx.params.id);
      ctx.body = shop;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteShopById(ctx) {
    try {
      let shop = await db.Shop.findById(ctx.params.id);
      shop.isDel = 1;
      shop.save();
      ctx.body = { code: 1, msg: '删除成功', Shop: shop};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateShop(ctx) {
    try {
      let shop = await db.Shop.findById(ctx.params.id);
      Object.assign(shop, ctx.request.body);
      shop.save();
      ctx.body = { code: 1, msg: '修改成功', Shop: shop};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}