const Mock = require('mockjs');
let {Random} = Mock;
module.exports =Mock.mock({
  "signIn":[{
    id: 1001,
    shopId: "",
    subOn: "2019-07-31",
    imgs: [
       '/a.jpg'
    ],
    remark: ""
  }],
  "order":[],
  user: [
    {
      id: 1000,
      CNO: '1000',
      PNO: 1000,
      username: 'wyd',
      password: 'aicoder.com',
      del: false,
      active: true, //  激活
      avatar: 'http://localhost:8889/server/img/a1.png',
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
      avatar: 'http://localhost:8889/server/img/a1.png',
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
      avatar: 'http://localhost:8889/server/img/a1.png',
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
      avatar: 'http://localhost:8889/server/img/a1.png',
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
  "shopSales|202": [{
    "id|+1": 30001,
    "MonthSales": "@integer(100, 300020)",
    "MonthAvgSales": "@integer(100, 300020)",
    "DivSalesPercent": "@integer(1, 100)",
  }],
  "shop|202": [{
    "id|+1": 30001,
    pid: "@integer(100, 120)",
    name: '@cname ' + 'AICODER超市',
    bossName: '@cfirst ' + '老板',
    subon: '2019-05-08 16:54:26',
    phone: '17835816757',
    "distance": "@integer(100, 6000)",
    del: 0,
    address: "@county(true)",
    type: "@pick(['混合型','商超','便利店', '批发市场'])",
    "imgUrl|1-3": [{
      alt: '@ctitle',
      url: '@image("500x500", "#02adea", "aicoder.com")'
    }],
    "coordinate": {
      Lng:"@float(95.1000000000, 118.0000000, 9, 10)",
      Lat: "@float(24.1000000000, 41.0000000, 9, 10)"
    }
  }],
  "warehouse|20": [{
    "id|+1": 100,
    reponame: '@city '+ '@integer(1000, 9999) ' + '仓库',
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
    "packageDimensions":"@pick(['12盒/箱', '2包/箱', '12个/包', '2kg/个'])",
    "monery|1-500": 28.00,
    "number|1-400": 22,
    "warehouseId|101-119": 103,
    "onsales": "@boolean",
    "type": "@pick(['洗护','食品','宝洁'])",
    img: "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  }]
});
