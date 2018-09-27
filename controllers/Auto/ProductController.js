const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async postProduct(ctx, next) {
    ctx.response.type = 'json';
    let product = new db.Product(ctx.request.body);
    try {
      let addProduct = await product.save();
      ctx.body = addProduct;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getProductById(ctx) {
    try {
      let product = await db.Product.findById(ctx.params.id);
      ctx.body = product;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteProductById(ctx) {
    try {
      let product = await db.Product.findById(ctx.params.id);
      product.isDel = 1;
      product.save();
      ctx.body = { code: 1, msg: '删除成功', Product: product};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateProduct(ctx) {
    try {
      let product = await db.Product.findById(ctx.params.id);
      Object.assign(product, ctx.request.body);
      product.save();
      ctx.body = { code: 1, msg: '修改成功', Product: product};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}