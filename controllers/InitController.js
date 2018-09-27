// 初始化数据接口
const db = require('../common/db');
module.exports = {
  async init(ctx, next) {
    // 初始化部门数据
    let d = new db.Department({
      DepartmentName: '业务部',
      DNO: '0001',
      SubTitle: '业务部门非常厉害',
      Avatar: '',
    });
    await d.save();
    // 初始化用户的数据
    for(let i = 0; i < 100; i++) {
      let user = new db.User({
        Name: 'aicoder' + i,
        Passwd: '123123',
        Avatar: 'String',
        CName: '老马' + i,
        Phone: '1892225566',
        SubTitle: '美好的一天又开始了！',
        LastLoginDate: Date.now(),
        Department: d['_id'],
        isDel: false
      });
      await user.save();
    }
    ctx.body = '数据初始化成功！';
  }
};
