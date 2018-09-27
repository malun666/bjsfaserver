const db = require('../../common/db');
const logger = require('../../common/log');

module.exports = {
   async getDepartment(ctx, next) {
    try {
      ctx.response.type = 'json';
      let pageSize = 0; // 一页多少条
      let pageIndex = 0; // 第几页
      let queryObj = {};
      let sortObj = {};
      if (!ctx.query) {
        let departmentList = await db.Department.find({isDel: false}).exec();
        ctx.body = departmentList;
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
      let total = await db.Department.find(queryObj).count().exec();

      let query = db.Department.find(queryObj).sort(sortObj);

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
  async postDepartment(ctx, next) {
    ctx.response.type = 'json';
    let department = new db.Department(ctx.request.body);
    try {
      let addDepartment = await department.save();
      ctx.body = addDepartment;
    } catch (e) {
      ctx.body = {msg: '添加失败！', code: 0};
      logger.error(e);
    }
  },
  async getDepartmentById(ctx) {
    try {
      let department = await db.Department.findById(ctx.params.id);
      ctx.body = department;
    } catch(e) {
      ctx.body = {msg: '查询失败！', code: 0};
      logger.error(e);
    }
  },
  async deleteDepartmentById(ctx) {
    try {
      let department = await db.Department.findById(ctx.params.id);
      department.isDel = 1;
      department.save();
      ctx.body = { code: 1, msg: '删除成功', data: department};
    } catch(e) {
      ctx.body = {msg: '删除失败！', code: 0};
      logger.error(e);
    }
  },
  async updateDepartment(ctx) {
    try {
      let department = await db.Department.findById(ctx.params.id);
      Object.assign(department, ctx.request.body);
      department.save();
      ctx.body = { code: 1, msg: '修改成功', data: department};
    } catch(e) {
      ctx.body = {msg: '修改失败！', code: 0};
      logger.error(e);
    }
  }
}