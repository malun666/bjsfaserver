const Mock = require('mockjs');
let {Random} = Mock;
module.exports =Mock.mock({
  user: [
    {
      id: 1000,
      CNO: '1000',
      PNO: 1000,
      username: 'wyd',
      password: 'aicoder.com',
      del: false,
      active: true, //  激活
      avatar: 'http://n.hamkd.com/server/img/a1.png',
      name: '张三',
      department: '市场部',
      lastLogin: "2019-06-19 20:38:45",
      mail: Random.email(),
      phone: '189222222',
      isTeacher: true
    },
    {
      id: 1001,
      CNO: '1000',
      PNO: 1001,
      username: 'ngr',
      password: 'aicoder.com',
      del: false,
      active: true, //  激活
      avatar: 'http://n.hamkd.com/server/img/a1.png',
      name: '李思',
      department: '市场部',
      lastLogin: "2019-06-19 20:38:45",
      mail: Random.email(),
      phone: '189222222',
      isTeacher: false
    },
    {
      id: 1002,
      CNO: '1000',
      PNO: 1002,
      username: 'admin',
      password: 'aicoder.com',
      del: false,
      active: true, //  激活
      avatar: 'http://n.hamkd.com/server/img/a1.png',
      name: '李思',
      department: '市场部',
      lastLogin: "2019-06-19 20:38:45",
      mail: Random.email(),
      phone: '189222222',
      isTeacher: true
    },
    {
      id: 1003,
      CNO: '1000',
      PNO: 1003,
      username: 'admin1',
      password: 'aicoder.com',
      del: false,
      active: true, //  激活
      avatar: 'http://n.hamkd.com/server/img/a1.png',
      name: '李思',
      department: '市场部',
      lastLogin: "2019-06-19 20:38:45",
      mail: Random.email(),
      phone: '189222222',
      isTeacher: true
    }
  ],
  "notice|320": [{
    "id|+1": 1000,
    title: '@ctitle(10, 20)',
    text: '@cparagraph(30, 50)',
    to: '销售部门全体同仁',
    subby: 1001,
    SubDate: '@datetime("yyyy/MM/dd hh:mm:ss")',
    date: '2016.5.12-2016.5.14',
    address: '北京双龙峡冰瀑',
    isRead: '@boolean',
    del: 0
  }],
  "shop|202": [{
    "id|+1": 30001,
    pid: 231093,
    name: '@cname ' + 'AICODER超市',
    bossName: '@cfirst ' + '老板',
    subon: '2019-05-08 16:54:26',
    phone: 17835816757,
    distance: '200m',
    del: 0,
    address: "@county(true)",
    type: "@pick(['混合型','商超','便利店', '批发市场'])",
  }],
  "warehouse|20": [{
    "id|+1": 100,
    reponame: '@city ' + '仓库',
    del: 0
  }],
  "trainingImg|30": [{
    "id|+1": 100001,
    title: '@ctitle',
    text: '@cparagraph(50, 300)',
    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2675641121,2895192120&fm=26&gp=0.jpg',
    del: 0,
    monery: "19.50",
    number: "1"
  }],
  "answer|40": [{
    "id|+1": 1,
    question: '@ctitle(9, 20)',
    trueAnswer: '@ctitle(2, 5)',
    answer1: '@ctitle(2, 5)',
    answer2: '@ctitle(2, 5)',
    answer3: '@ctitle(2, 5)',
    del: 0
  }],
  "goods|320":   [{
    "id|+1":20,
    title: '@ctitle(3, 9)',
    serial: 34577,
    "monery|1-500": 28.00,
    "number|1-400": 22,
    "repertory|100-120": 103,
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  }]
});
