const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
   async getUser(ctx, next) {
    try {
      ctx.response.type = 'json';
      let pageSize = 0; // 一页多少条
      let pageIndex = 0; // 第几页
      let queryObj = {};
      let sortObj = {};
      if (!ctx.query) {
        let userList = await db.User.find({isDel: false}).exec();
        ctx.body = userList;
        return;
      }

      for (let key of Object.keys(ctx.query)) {
        // 模糊查询
        if (key.endsWith('_like')) {
          queryObj[key.replace('_like', '')] = new RegExp(ctx.query[key], 'i');
        }

        // 等於的查詢
        if(key.endsWith('_eq')) {
          queryObj[key.replace('_eq', '')] = ctx.query[key];
        }
        
        // 分页查询
        if (key == 'pageSize' || key == 'limit') {
          pageSize = parseInt(ctx.query[key]);
          if (!Number.isInteger(pageSize) || pageSize <= 0) {
            pageSize = 10;
          }
        }

        // 判断第几页
        if (key == 'page') {
          pageIndex = parseInt(ctx.query[key]);
          if (!Number.isInteger(pageIndex) || pageIndex <= 0) {
            pageIndex = 1;
          }
        }

        // 处理排序
        if(key == 'sort_asc') {
          sortObj[ctx.query[key]] = 'asc';
        }
        if(key=="sort_desc") {
          sortObj[ctx.query[key]] =  'desc';
        }
      }

      // 處理排序
      let total = await db.User.find(queryObj).count().exec();

      let query = db.User.find(queryObj).sort(sortObj);

      // 處理分頁
      if(pageIndex + pageSize > 0 ) {
        (pageIndex <= 0) && (pageIndex = 1);
        (pageSize <=0) && (pageSize = 10);
        query = query.skip((pageIndex - 1) * pageSize).limit(pageSize);
      }
      
      let data = await query.exec();
      ctx.body = { data, total, pageIndex, pageSize}
    } catch(e) {
      ctx.body = {code: 0, msg: '請求發生異常!'}
      logger.error(e);
    }
  },
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
      ctx.body = { code: 1, msg: '删除成功', data: user};
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
      ctx.body = { code: 1, msg: '修改成功', data: user};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}