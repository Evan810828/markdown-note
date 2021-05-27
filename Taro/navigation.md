# 4. 小程序的路由以及底部导航栏的添加

(BY:WUYF, 2020.1.6)

> [返回 Taro 内容索引](./index.md)

微信小程序的所有页面路由一般都放在app.config.js (app.json) 内，我们通过修改pages的属性可以添加或删除页面路由

```
export default {
  pages: [
    'pages/index/index',
    'pages/newPage/newPage'
  ]
}
```

有了相关的路由之后，我们就可以进行相应的路由跳转了，和WXML语法一样，taro框架内的路由跳转有5个方法：
1. Taro.switchTab(option)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

2. Taro.reLaunch(option)

关闭所有页面，打开到应用内的某个页面

3. Taro.redirectTo(option)

关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。

4. Taro.navigateTo(option)

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。

5. Taro.navigateBack(option)

关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。


其中option内的参数API如下

属性 | 类型 |	必填 |	说明
-- | -- | -- | --
url | string	|	是 |	需要跳转的 tabBar 页面的路径 (代码包路径)（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。
success |	function	|	否 |	接口调用成功的回调函数
fail |	function	|	否 |	接口调用失败的回调函数
complete |	function	|	否 |	接口调用结束的回调函数（调用成功、失败都会执行）

其中，如果待跳转页面属于TabBar

![image](./TabBar.gif)

则不能用navigateTo进行跳转
```
showCategories: function () {
  Taro.navigateTo({
    url: "../category/category"
  });
},
```
而要使用switchTab
```
Taro.switchTab({
  url: "../category/category"
});
```



---

上一篇：[3. 使用 React 框架开发 Taro](taro3.md)