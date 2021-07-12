# HTTP Cookie

[参考文章：《JavaScript 标准参考教程（alpha）》阮一峰](https://javascript.ruanyifeng.com/bom/cookie.html)

Cookie 是服务器保存在浏览器的一小段文本信息，浏览器每次向服务器发出请求，就会自动附上这段信息

## 应用

Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息

有些开发者使用 Cookie 作为客户端储存。这样做虽然可行，但是并不推荐，因为 Cookie 的设计目标并不是这个，它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。

客户端储存应该使用 Web storage API 和 IndexedDB

## 属性

1. Cookie 的名字
2. Cookie 的值（真正的数据写在这里面）
3. 到期时间
4. 所属域名（默认是当前域名）
5. 生效的路径（默认是当前网址）

## Cookie 的基本用法

Cookie 由 HTTP 协议生成，也主要供 HTTP 协议使用

1. 如果希望在浏览器中保存 Cookie 信息，就需要在HTTP响应信息的 `Hearders` 中加入 `Set-Cookie` 字段
    ```
    Set-Cookie:foo=bar
    // 上面代码会在浏览器保存一个名为foo的 Cookie，它的值为bar
    ```
2. HTTP 回应可以包含多个Set-Cookie字段
    ```
    HTTP/1.0 200 OK
    Content-type: text/html
    Set-Cookie: yummy_cookie=choco
    Set-Cookie: tasty_cookie=strawberry
    ```
3. Cookie字段可以包含多个 Cookie，使用分号;分隔
    ```
    Cookie: name=value; name2=value2; name3=value3
    ```
4. 服务器收到浏览器发来的 Cookie 时，有两点是无法知道的<br/>

    Cookie 的各种属性，比如何时过期；<br/>
    哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的

## **Set-Cookie**

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; domain=example.com; path=/; HttpOnly
```

1. Cookie 名称：`id`
2. Cookie 值：`a3fWa`
3. Cookie 到期时间（**Expire**）：`Wed, 21 Oct 2015 07:28:00 GMT`


   Expires属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，可以使用Date.prototype.toUTCString()进行格式转换

   Max-Age属性指定从现在开始 Cookie 存在的秒数，比如60 * 60 * 24 * 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie

   如果同时指定了Expires和Max-Age，那么Max-Age的值将优先生效

   如果不设置该属性，或者设为null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期

4. Cookie 所属域名/生效路径（**Domain** / **Path**）：`/`
   
   Domain属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie，如果没有指定该属性，浏览器会默认将其设为当前 URL 的一级域名

   Path属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH属性是/，那么请求/docs路径也会包含该 Cookie。**当然，前提是域名必须一致**

5. **Secure** / **HttpOnly**：`HttpOnly`

   Secure属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的Secure属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开

   HttpOnly属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是Document.cookie属性、XMLHttpRequest对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie

## window.navigator.cookieEnabled

```
// 浏览器是否打开 Cookie 功能
window.navigator.cookieEnabled // true
```

## document.cookie

```
// 当前网页的 Cookie
document.cookie
```
读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有HTTPOnly属性

document.cookie属性是可写的，可以通过它为当前网站添加 Cookie
```
document.cookie = 'fontSize=14';
```
写入的时候，Cookie 的值必须写成key=value的形式。注意，等号两边不能有空格；写入 Cookie 的时候，必须对分号、逗号和空格进行转义

**删除一个现存 Cookie 的唯一方法，是设置它的expires属性为一个过去的日期**
