# Taro 小程序实现微信授权登录

(By YHW 2020.1.9)

> [ 返回 Taro 内容索引](./index.md)

> 相关阅读：
>
> 微信小程序官方文档链接：[点击查看](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
>
> Taro官方文档相关内容：[点击查看](http://taro-docs.jd.com/taro/docs/apis/open-api/login/login/)

## 示例代码

```js
Taro.login({
  success: function (res) {
    if (res.code) {
      //发起网络请求
      Taro.request({
        url: 'https://test.com/onLogin',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
```

## 返回结果介绍

success 参数需要传入一个函数，该函数的输入值为一个 HTTP response 对象（与 fetch API 的 response 对象相同）

resposne 对象包含以下两条字段

* code
* srrMsg

其中，code为用户登录凭证（有效期五分钟）。开发者需要继续调用 `auth.code2Session`，使用 code 换取 openid 和 session_key 等信息

## auth.code2Session 调用方法

参考微信官方文档：[auth.code2Session 文档原文](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)

> auth.code2Session 用于登录凭证校验。通过 wx.login 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。

请求地址：

```text
GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
```

其中：

| 属性       | 类型   | 默认值 | 必填 | 说明                                      |
| :--------- | :----- | :----- | :--- | :---------------------------------------- |
| appid      | string |        | 是   | 小程序 appId                              |
| secret     | string |        | 是   | 小程序 appSecret                          |
| js_code    | string |        | 是   | 登录时获取的 code                         |
| grant_type | string |        | 是   | 授权类型，此处只需填写 authorization_code |

微信官方给出的建议是，后端服务器去调用这个接口，即，前端不应该直接与微信服务器沟通，

在 TB 的项目中，后端 django 程序调用这个接口，该接口返回一个 JSON 格式的 body，该JSON对象将包含以下字段

```
{
    "openid":"用户唯一标识",
    "session_key":"会话密钥",
    "unionid":"用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回",
    "errcode":0,
    "errmsg":"错误信息",
}
```
其中 errorcode 可能为以下几个值

| 值    | 说明                           |
| :---- | :----------------------------- |
| -1    | 系统繁忙，此时请开发者稍候再试 |
| 0     | 请求成功                       |
| 40029 | code 无效                      |
| 45011 | 频率限制，每个用户每分钟100次  |

## 下一步：

其中 openid 和 session_key 可以保存在 TeaBreak 服务器的后端，与 TeaBreak 的 User 数据库表对应，即可实现微信用户与 TeaBreak 账号的一对一绑定。后端可以考虑把 openid返回给前端，但不可以将session_key返回给前端。

在下一次用户重新登录时，仍然会有 code，并产生新的 openid 和 session_key，后端只需比对 openid 是否对应已注册 TB 用户即可确定用户是否可以重新登录，以此取代旧有的 user_id 和 password 登录方式，提高用户体验。

 