# 接口文档

> 内部文档禁止分享

## 综述

只有登录相关的接口不需要添加认证的token,其余所有的接口请求都必须在请求头中添加 `Authorization`.

所有的请求对应模型都默认提供了: 添加、修改、查询、复杂查询和删除操作的api。

### 接口统一地址模型

接口地址符合`RestFul`风格。

+ 添加

| 标题  | 说明               | 备注                                        |
|-----|------------------|-------------------------------------------|
| 地址  | `POST /api/模型名字` | `header`中必须添加 `Authrization`对应的jwt的token. |

例如:

```js
$.ajax({
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3002/api/user",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcxODU3OTk5NzgsIm5hbWUiOiJzZGZmZmYifQ.WLVdU-GESQR6kJfUdLCBpNWUZMGAW6VsTk6lfAXC1xM"
  },
  "data": {
    "Name": "laomsds",
    "Passwd": "aaafc44445555",
    "isDel": "false"
  }
}).done(function (response) {
  console.log(response);
});
```

+ 修改

| 标题  | 说明                  | 备注                                        |
|-----|---------------------|-------------------------------------------|
| 地址  | `PUT /api/模型名字/:id` | `header`中必须添加 `Authrization`对应的jwt的token. |
支持`PATCH协议`

```js
$.ajax({
  "async": true,
  "crossDomain": true,
  "url": "http://%E4%BF%AE%E6%94%B9",
  "method": "PUT",
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcxODU3OTk5NzgsIm5hbWUiOiJzZGZmZmYifQ.WLVdU-GESQR6kJfUdLCBpNWUZMGAW6VsTk6lfAXC1xM",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "Name": "laoma2333"
  }
}).done(function (response) {
  console.log(response);
});
```

+ 删除

| 标题  | 说明                     | 备注                                        |
|-----|------------------------|-------------------------------------------|
| 地址  | `DELETE /api/模型名字/:id` | `header`中必须添加 `Authrization`对应的jwt的token. |

```js
$.ajax({
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3002/api/user/5b9621e7cad9bf1c60e1d51f",
  "method": "DELETE",
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcxODU3OTk5NzgsIm5hbWUiOiJzZGZmZmYifQ.WLVdU-GESQR6kJfUdLCBpNWUZMGAW6VsTk6lfAXC1xM"
  }
}).done(function (response) {
  console.log(response);
});
```

+ 查询id

| 标题  | 说明                  | 备注                                        |
|-----|---------------------|-------------------------------------------|
| 地址  | `GET /api/模型名字/:id` | `header`中必须添加 `Authrization`对应的jwt的token. |

```js
$.ajax({
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3002/api/user/5b9621e7cad9bf1c60e1d51f",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcxODU3OTk5NzgsIm5hbWUiOiJzZGZmZmYifQ.WLVdU-GESQR6kJfUdLCBpNWUZMGAW6VsTk6lfAXC1xM"
  }
}).done(function (response) {
  console.log(response);
});
```

### 复合查询

| 标题     | 说明                                                                                             |
|--------|------------------------------------------------------------------------------------------------|
| 地址     | `GET /api/模型名字`                                                                                |
| 注意事项   | `header`中必须添加 `Authrization`对应的jwt的token.                                                      |
| 分页     | 当前页请求参数中,添加 `page`, 默认不分页.一页大小,请在请求参数中添加`limit`或`pageSize`. 例如:   `page=9&limit=10`,一页10条,第9页. |
| 排序     | 升序: `sort_asc=排序字段名`, 降序:`sort_desc=排序字段名`                                                     |
| 等于过滤   | `字段名_eq=等于的值`, 查询某个字段必须等于什么...                                                                 |
| 模糊查询过滤 | `字段名_like=模糊查询的值`                                                                              |

```js
$.ajax({
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3002/api/user?sort_asc=Passwd&limit=5&page=1",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzcxODU3OTk5NzgsIm5hbWUiOiJzZGZmZmYifQ.WLVdU-GESQR6kJfUdLCBpNWUZMGAW6VsTk6lfAXC1xM"
  }
}).done(function (response) {
  console.log(response);
});
```

## 验证码地址

地址：http://192.168.1.130:8888/api/code

后台返回 svg的内容。

前端使用：

```html
<embed src="http://192.168.1.130:8888/api/code" type="image/svg+xml" />
或者图片
<img src="http://192.168.1.130:8888/api/code" alt="Breaking Borders Logo" height="65" width="68">
```

## 文件上传

文件上传限制文件大小： 2M，目前只支持上传一张图片。

上传地址： `http://192.168.1.130:8888/api/upload`

请求参数：

```sh
请求表单中，文件对应的name必须为： imgF
```

上传图片后，返回内容：

```js
{ img: `图片地址` }
// 例如：
{ img: '/server/upload/a.png'}
```

> 后台图片存放在192.168.1.130服务器上。

## 登陆相关

### 登陆获取token

用户登录WebApp时，首先对用户进行鉴权。

| 类型   | 说明                                                   |
|------|------------------------------------------------------|
| 接口地址 | `http://192.168.1.130:8888/api/userlogin` |
| 请求方式 | `POST`                                               |
| 数据类型 | `application/x-www-form-urlencoded`                                   |
| 特殊要求 | 后台限制同一指纹浏览器,在1分钟内只能请求5次,超过次数认为是攻击,则禁止登录.             |

#### 请求参数

| 序号  | 字段     | 类型     | 性质  | 说明   |
|-----|--------|--------|-----|------|
| 1   | CNO    | String | 必填  | 公司编号 |
| 2   | PNO    | String | 必填  | 员工编号 |
| 3   | password | String | 必填  | 密 码   |

#### 返回值

| 序号  | 字段    | 类型     | 说明                |
|-----|-------|--------|-------------------|
| 1   | user  | Object | 登陆成功的用户对象信息       |
| 2   | code  | Number | 登陆成功的编码，1成功， 0失败。 |
| 3   | token | String | token密钥。          |
| 4   | msg   | String | 消息内容。             |

> 登录成功后续请求都需要添加token密钥到header的Authorization中。

用户对象类型

| 属性            | 类型       | 参考值                      | 说明     |
|---------------|----------|--------------------------|--------|
| id           | Number | 1 | 主键     |
| CNO           | String | '1100' | 主键     |
| PNO          | Number | 1000 | 主键     |
| username          | String   | vyk                      | 用户名    |
| passwd        | String   | 123123                   | 密码     |
| avatar        | String   | /a/b.png                 | 头像     |
| name         | String   | 郑霞                       | 中文名    |
| phone         | String   | 1555511215151            | 电话     |
| mail | Date     | lsf@mm.com               | 邮箱 |
| school    | String | 北京大学 | 学校   |
| isTeacher    | Boolean | true | 是否是老师   |
| del         | Boolean  | false                    | 是否删除   |

#### 返回实例

```js
// 登录成功消息
{
    "user":{
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
    "code": 1,
    "msg": "登录成功",
    "token": "eyJ0eXAiOiJKV1..."
}

// 登录失败消息
{
  code: 0,
  msg: '用户名或者密码错误'
}
```

当前可以用的用户名密码：

用户名|密码|是否是老师
---|---|---
ngr|aicoder.com|否
wyd|aicoder.com|是
admin|aicoder.com|是
admin1|aicoder.com|是

## 通知接口相关

### 获取用户通知

类型|说明
---|---
接口地址|`http://域名/api/message'`<br>例如：`http://aicoder.com/api/message`
请求方式|`GET`
数据类型|`application/x-www-form-urlencoded`

#### 请求参数

序号|字段|类型|性质|说明
---|---|---|---|---
1|date|String|选填|查询的日期，默认当前时间
2|limit|String|选填|查询的条数，默认是10
3|isloadelater|Boolean|选填|是否加载相对于date的之前 的数据，默认是true

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|消息的主键
2|title|String|消息标题
3|text|String|消息内容
4|to|String| 消息接收主体
5| SubDate| Date| 提交日期
6|date|String|获得日期
7|"address"|String|地址
8|"isRead"|Boolean| 是否已读
9|"del"|Number|删除，0 未删除，1删除

#### 返回实例

```js
[
    {
        "id": 1000,
        "title": "七电民维学定备引派江置除产各快形采面",
        "text": "才许利什与争人构果再音边动前精红光。务回列不却所装市合山派当专。金声总认高当争关出路百入千争素转。过车便极选信到研业农存真光已。交所效南运不厂林水组就儿。实老线油七其给又就济群这目生何联级手见很政代素名。转物克电花研此区比龙每小。林外办民国这低极劳组力日。最变习就其价公义直花事支导报风林。产可今具使习增统四技心道音且就究广。历花美色第型青看其如是形照格。",
        "to": "销售部门全体同仁",
        "subby": 1001,
        "SubDate": "2005/03/03 09:43:48",
        "date": "2016.5.12-2016.5.14",
        "address": "北京双龙峡冰瀑",
        "isRead": false,
        "del": 0
    },
    {
        "id": 1001,
        "title": "型分受改整放解者加属般活料感转",
        "text": "看西转经由满较县金有得气深拉任它器。己张交确么就比流时式金例。品用力业备白去多际养保年三。那间米叫常江关专数性科矿。志东提品级共界品业节育。织也自术验济办两深月支美素。拉些质叫经流她半速厂又调音及段现收。率组石周易两同律究海易传北对县志统。",
        "to": "销售部门全体同仁",
        "subby": 1001,
        "SubDate": "2001/04/17 03:58:08",
        "date": "2016.5.12-2016.5.14",
        "address": "北京双龙峡冰瀑",
        "isRead": true,
        "del": 0
    }
]
```

### 设置通知已读

类型|说明
---|---
接口地址|`http://域名/api/auth/notice/:id'`<br>例如：`http://aicoder.com/api/auth/notice/1001`
请求方式|`POST`
数据类型|`application/x-www-form-urlencoded`

#### 请求参数

无

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|code|Number|消息编码，1：成功，0失败
2|msg|String|消息
3|data|Object|null

#### 返回实例

```js
{
    "code": 1,
    "msg": "设置成功！",
    "data": null
}
```
