# React Router 基本使用

参考文档：[React Router 中文文档](https://react-guide.github.io/react-router-cn/)

## 1、安装 React Router 包
```
npx install -S react-router
```

## 2、Router 与 Route
```
import { 
    BrowserRouter as Router，
    Switch，
    Route 
} from 'react-router'
```
```
<Router>
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
</Router>
```

`<Router>` 会时刻监听浏览器 URL 的变化<br/>
而 `<Route>` 则会直接接收到这些 URL 的信息<br/>
如果当前当 URL 与该标签内部的参数相吻合，那么 `<Route>` 下的组件就会被渲染<br/>
我们可以把 `<Router>` 理解为是 `<Route>` 的容器

相关：[BrowserRouter 与 HashRouter 的区别](https://segmentfault.com/a/1190000022219099)

## 3、`<Switch>` 标签
渲染第一个被location匹配到的并且作为子元素的 `<Route>` 或者 `<Redirect>`

**为什么使用`<Switch>` ？**<br/>

`<Switch>`是唯一的因为它仅仅只会渲染一个路径。<br/>
相比之下（不使用 `<Switch>` 包裹的情况下），每一个被location匹配到的 `<Route>` 将都会被渲染

例如下面的代码：
```
<Route path="/about" component={About} />
<Route path="/:user" component={User} />
<Route component={noMatch} />
```

如果URL是/about, 那么`<About>`，`<User>`，和 `<NoMatch>` 将都被渲染，因为它们的path全都被匹配到。<br/>

## 4、路由匹配原理

(太难了看不懂)

相关文档：<br/>
https://zhuanlan.zhihu.com/p/270651966<br/>
https://juejin.cn/post/6886290490640039943