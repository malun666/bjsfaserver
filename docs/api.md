# 接口文档

## 用户接口相关

### 用户ID查询

#### 接口地址

`http://域名/user/:id`

例如：`http://aicoder.com/user/29`

#### 请求方式：`GET`

#### 数据类型：`application/x-www-form-urlencoded`

#### 请求参数

序号|字段|类型|性质|说明
---|---|---|---|---
1|id|String|必填|这个是路由参数，必须放入地址中
2|token|String|必填|这个是登陆后，用户的登陆token。数据请放到请求的`Authorization`

#### 返回值

序号|字段|类型|说明
---|---|---|---
1|_id|String|自动生成的主键
2|Name|String|用户名
3|Passwd|String|密码

#### 返回实例

```js
{
  "_id": "5b9621e7cad9bf1c60e1d51f",
  "isDel": false,
  "Name": "laomsds",
  "Passwd": "2344"
}
```