# 接口文档

## 登陆相关

### 登陆获取token

类型|说明
---|---
接口地址|`http://域名/login`  <br>例如：`http://aicoder.com/login`
请求方式|`POST`
数据类型|`application/x-www-form-urlencoded`

#### 请求参数

序号|字段|类型|性质|说明
---|---|---|---|---
1|Name|String|必填|用户名
2|Passwd|String|必填|密码

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|user|Object|登陆成功的用户对象信息
2|code|Number|登陆成功的编码，1成功， -1失败。
3|token|String|token密钥。所有的后续请求都需要添加此密钥到header中。

#### 返回实例

```js
{
  "user": {
      "isDel": false,
      "_id": "5b9621a6944ecd21c43dff52",
      "Name": "laoma",
      "Passwd": "2344",
      "__v": 0
  },
  "code": 1,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc0RlbCI6ZmFsc2UsIl9pZCI6IjViOTYyMWE2OTQ0ZWNkMjFjNDNkZmY1MiIsIk5hbWUiOiJsYW9tYSIsIlBhc3N3ZCI6IjIzNDQiLCJfX3YiOjB9.6bWNq5j_pUxlMUpiCSIE1_3iuqim1nQIQX7Qxo0KMG0"
}
```

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
