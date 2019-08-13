# 接口文档

> 内部文档禁止分享

请支持老马的全栈培训：  [https://www.aicoder.com](https://www.aicoder.com)

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
    "Content-Type": "application/json"
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
| 数据类型 | `application/json`                                   |
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

用户名|公司编号|员工号|密码|是否是老师
---|---|---|---|---
ngr| 1000| 1000|aicoder.com|否
wyd| 1000| 1001|aicoder.com|是
admin| 1000| 1002|aicoder.com|是
admin1| 1000| 1003|aicoder.com|是

## 通知接口相关

### 获取用户通知

类型|说明
---|---
接口地址|`http://域名/api/message'`<br>例如：`http://aicoder.com/api/message`
请求方式|`GET`
数据类型|`application/json`

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
数据类型|`application/json`

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

## 店铺相关接口

### 获取单个店铺

类型|说明
---|---
接口地址|`http://域名/api/auth/shop/:id'`<br>例如：`http://aicoder.com/api/auth/shop/1001`
请求方式|`GET`
数据类型|`application/json`

#### 获取单个店铺请求参数

`header`中必须添加 `Authrization`对应的jwt的token.

#### 获取单个店铺返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|店铺主键
2|pid|Number|所属渠道，0代表主店铺
3|name|String|店铺名字
4|bossName|String|商店负责人名字
5|subon|String|店铺创建时间
6|phone|String| 店铺电话
7|distance|Number|店铺的距离
8|address|String|店铺地址 "四川省 成都市 崇州市",
9|type|String|店铺类型
10|imgUrl| Array|店铺图片 `{alt: '图片说明', url: '图片地址'}`
11|coordinate| Object| 经纬度，`{ "Lng": 经度, "Lat": 纬度}`

#### 获取单个店铺返回实例

```js
{
    "id": 30001,
    "pid": 231093,
    "name": "孔杰 AICODER超市",
    "bossName": "薛 老板",
    "subon": "2019-05-08 16:54:26",
    "phone": 17835816757,
    "distance": 2872,
    "del": 0,
    "address": "四川省 成都市 崇州市",
    "type": "便利店",
    "imgUrl": [
      {
          "alt": "三样却区西",
          "url": "http://dummyimage.com/500x500/02adea&text=aicoder.com"
      }
    ],
    "coordinate": {
      "Lng": 98.904543148,
      "Lat": 33.4410827808
    }
}
```

### 获取所有店铺

类型|说明
---|---
接口地址|`http://域名/api/auth/shop?_page=1&_limit=10&_order=asc&_sort=distance'`<br>例如：`http://localhost:8889/api/auth/shop?_page=1&_limit=10&_order=asc&_sort=distance`
请求方式|`GET`
数据类型|`application/json`

#### 获取所有店铺请求参数

key|value
---|---
Lng| 经度
Lat| 纬度

> `header`中必须添加 `Authrization`对应的jwt的token.

#### 获取所有店铺返回值

后台返回是一个数组，数组中的元素类型为：

序号|字段|类型|说明
---|---|---|---
1|id|Number|店铺主键
2|pid|Number|所属渠道，0代表主店铺
3|name|String|店铺名字
4|bossName|String|商店负责人名字
5|subon|String|店铺创建时间
6|phone|String| 店铺电话
7|distance|Number|店铺的距离
8|address|String|店铺地址 "四川省 成都市 崇州市",
9|type|String|店铺类型
10|imgUrl| Array|店铺图片 `{alt: '图片说明', url: '图片地址'}`
11|coordinate| Object| 经纬度，`{ "Lng": 经度, "Lat": 纬度}`

#### 获取所有店铺返回实例

```js
[
    {
        "id": 30031,
        "pid": 112,
        "name": "徐磊 AICODER超市",
        "bossName": "刘 老板",
        "subon": "2019-05-08 16:54:26",
        "phone": "17835816757",
        "distance": 456,
        "del": 0,
        "address": "河北省 石家庄市 井陉矿区",
        "type": "便利店",
        "imgUrl": [
            {
                "alt": "广革引非府电",
                "url": "http://dummyimage.com/500x500/02adea&text=aicoder.com"
            },
            {
                "alt": "器先以",
                "url": "http://dummyimage.com/500x500/02adea&text=aicoder.com"
            }
        ],
        "coordinate": {
            "Lng": 102.774287582,
            "Lat": 35.705760237
        }
    },
    ...
]
```

### 店铺添加

请求地址： `http://域名/api/auth/shop`

请直接参考[上文中的：接口统一地址模型](#接口统一地址模型)

### 店铺删除

请求地址：`http://域名/api/auth/shop/:id`
请求方法： `DELETE`
请直接参考[上文中的：接口统一地址模型](#接口统一地址模型)

### 店铺修改

请求地址：`http://域名/api/auth/shop/:id`
请求方法： `PUT`
请直接参考[上文中的：接口统一地址模型](#接口统一地址模型)

### 获取店铺销售进度

类型|说明
---|---
接口地址|`http://域名/api/auth/shopSales/:id`<br>例如：`http://localhost:8889/api/auth/shopSales/30031`
请求方式|`GET`
数据类型|`application/json`

#### 请求参数

url中的id为商铺的主键

> `header`中必须添加 `Authrization`对应的jwt的token.

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|店铺主键
2|MonthSales|Number|当前月销售
3|MonthAvgSales|Number|月平均销售
4|DivSalesPercent|Number|核心销售百分比

#### 获取所有店铺返回实例

```js
{
  "id": 30001,
  "MonthSales": 162789,
  "MonthAvgSales": 27398,
  "DivSalesPercent": 19
}
```

### 店铺签到

类型|说明
---|---
接口地址|`http://域名/api/auth/signIn`<br>例如：`http://localhost:8889/api/auth/signIn`
请求方式|`POST`
数据类型|`application/json`

#### 请求参数

序号|字段|类型|说明
---|---|---|---
1|id|Number|签到主键（项目中后台自动生成，目前只支持前台生成）
2|shopId|Number|店铺主键
3|SubOn|String|当天的日期
4|imgs|Arrary|签到照片，数组内就是图片的url地址

请求实例

```js
{
  id: 1001,
  shopId: 1002,
  subOn: "2019-07-31",
  imgs: [
      '/a.jpg'
  ],
  remark: ''
}
```

> `header`中必须添加 `Authrization`对应的jwt的token.

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|签到主键（项目中后台自动生成，目前只支持前台生成）
2|shopId|Number|店铺主键
3|SubOn|String|当天的日期
4|imgs|Arrary|签到照片，数组内就是图片的url地址

#### 获取所有店铺返回实例

```js
{
  id: 1001,
  shopId: 1002,
  subOn: "2019-07-31",
  imgs: [
      '/a.jpg'
  ],
  remark: ""
}
```

> 店铺上传的照片，请参考之前的文件上传接口。

## 商品接口

### 获取商品

类型|说明
---|---
接口地址|`http://域名/api/auth/goods?_limit=15&_page=1`<br>例如：`http://localhost:8889/api/auth/goods?_limit=15&_page=1`
请求方式|`GET`
数据类型|`application/json`

#### 请求参数

无

> `header`中必须添加 `Authrization`对应的jwt的token.

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|签到主键（项目中后台自动生成，目前只支持前台生成）
2|title|Number|商品标题
3|serial|Number|编码
4|monery|Number|价格
5|warehouseId|Number|仓库的id
6|img|String|签到照片，数组内就是图片的url地址
7|type|String|商品类型
8|onsales|boolean|是否促销
9|packageDimensions|String|规格

#### 获取商品的列表

```js
[
  {
    "id": 20,
    "title": "例志保界许速会",
    "serial": 34577,
    "monery": 308,
    "number": 203,
    "type": "洗护",
    "warehouseId": 101,
    "onsales": true,
    "packageDimensions": "12包/箱",
    "img": "http://img3.imgtn.bdimg.com/it/u=2165682634,1275439937&fm=26&gp=0.jpg"
  }
  ...
]
```

### 获取所有仓库信息

类型|说明
---|---
接口地址|`http://域名/api/auth/warehouse`<br>例如：`http://localhost:8889/api/auth/warehouse`
请求方式|`GET`
数据类型|`application/json`

#### 获取所有仓库请求参数

无

> `header`中必须添加 `Authrization`对应的jwt的token.

#### 获取所有仓库请求的返回值

序号|字段|类型|说明
---|---|---|---
1|id|Number|主键
2|reponame|String|仓库名
3|del|Number|删除标志，1为删除，0为未删除

#### 返回所有仓库数据列表

```js
[
  {
      "id": 100,
      "reponame": "秦皇岛市 8897 仓库",
      "del": 0
  },
  {
      "id": 101,
      "reponame": "广州市 9020 仓库",
      "del": 0
  },
  ...
]
```

## 订单相关接口

### 添加订单接口

类型|说明
---|---
接口地址|`http://域名/api/auth/order`<br>例如：`http://localhost:8889/api/auth/order`
请求方式|`POST`
数据类型|`application/json`

#### 请求参数

序号|字段|类型|说明
---|---|---|---
1|id|Number|签到主键（项目中后台自动生成，目前只支持前台生成）
2|shopId|Number|商铺Id
3|warehouse|Array|仓库信息
4|phone|String|电话
5|address|String|送货地址

`warehouse`是数组类型，数组中的每个元素字段如下：

序号|字段|类型|说明
---|---|---|---
1|id|Number|仓库的id
2|remark|String|备注信息
3|goodsId|Number|商品编号
4|count|Number|数量

> `header`中必须添加 `Authrization`对应的jwt的token.

## 用户相关接口

### 修改用户数据

类型|说明
---|---
接口地址|`http://域名/api/auth/user/:id'`<br>例如：`http://aicoder.com/api/auth/user/1000`
请求方式|`PUT`
数据类型|`application/json`

#### 请求参数

例如：

```js
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
}
```

#### 返回实例

```js
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
}
```