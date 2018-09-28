# 快速resetful接口化koa项目

这个是保洁SFA项目的后台接口项目。所有的接口都是RestFul风格。所有的请求都支持cors跨越。

## 应用技术

+ monogoose
+ koa2
+ koa-router
+ gulp
+ art-template
+ jwt

## 启动应用

+ 第一步： 配置mongodb

  1. 首先請您自己安裝`Mongodb`的服務器端
  1. 修改項目中的 common>db.js  文件,修改  `mongoose.connect('mongodb://localhost/sfaserver');` 把localhost換成對應你自己的mongodb的服務器ip地址.
  1. 啟動mogondb服務

+ 第二步:安裝依賴

```sh
cd project
yarn
# 或者用npm
npm i
```

+ 第三步: 啟動gulp的自動監控模板和`model>Schemas.js的`

```sh
# 进入项目根目录
cd project

yarn run dev
# 可以用npm
npm run dev

# 或者直接gulp运行default任务
gulp
```

+ 第四步: 启动

```sh
nodemon app.js
```

## 如何使用

### 端口

web服务默认使用的是3002端口.

### 添加接口

当应用启动后,直接往`model>Schemas.js` 添加Mongoose对应的Schema即可,gulp会自动监听变化,
并自动生成对应的路由文件和控制器文件。

测试接口,可以配合`PostMan`等接口测试工具。

### 接口地址

接口地址符合`RestFul`风格。

+ 添加
  > 地址: `POST /api/模型名字`
  > `header`中必须添加 `Authrization`对应的jwt的token.
+ 修改
  > 地址:`PUT /api/模型名字/:id`
  > `header`中必须添加 `Authrization`对应的jwt的token.
  > 支持`PATCH协议`
+ 删除
  > 地址:`DELETE /api/模型名字/:id`
  > `header`中必须添加 `Authrization`对应的jwt的token.
+ 查询id
  > 地址:`GET /api/模型名字/:id`
  > `header`中必须添加 `Authrization`对应的jwt的token.
  
### 复合查询

- 地址:`GET /api/模型名字`
- `header`中必须添加 `Authrization`对应的jwt的token.
- 分页: 当前页请求参数中,添加 `page`, 默认不分页.一页大小,请在请求参数中添加`limit`或`pageSize`. 例如:   `page=9&limit=10`,一页10条,第9页.
- 排序: 升序: `sort_asc=排序字段名`, 降序:`sort_desc=排序字段名`
- 等于过滤: `字段名_eq=等于的值`, 查询某个字段必须等于什么...
- 模糊查询过滤:`字段名_like=模糊查询的值`
  