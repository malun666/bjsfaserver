// 初始化数据接口
let Mock = require('mockjs');
const db = require('../common/db');
let {Random} = Mock;
Random.extend({
  dep: function(date) {
      var constellations = ['财务部','业务部','行政部','市场部','研发部']
      return this.pick(constellations)
  }
});

module.exports = {
  async init(ctx, next) {

    let data = Mock.mock({
      'Department|15': [{
        'DNO|+1': 100001,
        'DepartmentName': '@DEP',
        SubTitle: '@ctitle',
        Avatar: ''
      }],
      'User|20': [{
        Name: '@word',
        'PNO|+1': 80001,
        Passwd: '123123',
        CNO: '6666',
        Avatar: '',
        CName: '@cname',
        Phone: '',
        SubTitle: '@csentence',
        LastLoginDate: '@now',
        Department: null,
        isDel: false
      }] 
    });

    for(let item of Object.values(data.Department)) {
      // 初始化部门数据
      let d = new db.Department(item);
      await d.save();
    }

    let department = await db.Department.find({"DepartmentName": "市场部"}).exec();
    // 初始化用户的数据
    data.User.forEach(async (item, index) => {
      let user = new db.User(item);
      user.Department = department[0]._id;
      await user.save();
    });
    ctx.body = data;
  }
};
