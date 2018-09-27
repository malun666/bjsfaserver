const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
  async post{{Name}}(ctx, next) {
    ctx.response.type = 'json';
    let {{lowerCaseName}} = new db.{{Name}}(ctx.request.body);
    try {
      let add{{Name}} = await {{lowerCaseName}}.save();
      ctx.body = add{{Name}};
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async get{{Name}}ById(ctx) {
    try {
      let {{lowerCaseName}} = await db.{{Name}}.findById(ctx.params.id);
      ctx.body = {{lowerCaseName}};
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async delete{{Name}}ById(ctx) {
    try {
      let {{lowerCaseName}} = await db.{{Name}}.findById(ctx.params.id);
      {{lowerCaseName}}.isDel = 1;
      {{lowerCaseName}}.save();
      ctx.body = { code: 1, msg: '删除成功', {{Name}}: {{lowerCaseName}}};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async update{{Name}}(ctx) {
    try {
      let {{lowerCaseName}} = await db.{{Name}}.findById(ctx.params.id);
      Object.assign({{lowerCaseName}}, ctx.request.body);
      {{lowerCaseName}}.save();
      ctx.body = { code: 1, msg: '修改成功', {{Name}}: {{lowerCaseName}}};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}