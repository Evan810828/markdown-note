# 3. 使用 React 框架开发 Taro

（BY: YHW, 2020.12.25）

> 上一篇：[2. Taro的安装及项目初始化](taro2.md)
>
> 下一篇：[入门教程结束，返回 Taro 相关内容索引]](taro4.md)


## Taro 使用 React 开发需要了解的新知识

Taro 支持使用 React 进行开发，但和在浏览器中使用 React 稍有不同，具体体现在：

### 1. 入口组件

每一个 Taro 应用都需要一个入口组件用来注册应用，入口文件默认是 src 目录下的 app.js。

在 Taro 中使用 React，入口组件必须导出一个 React 组件。在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期：

```
import React, { Component } from 'react'

// 假设我们要使用 Redux
import { Provider } from 'react-redux'
import configStore from './store'

// 全局样式
import './app.css'

const store = configStore()

class App extends Component {
  // 可以使用所有的 React 组件方法
  componentDidMount () {}

  // 对应 onLaunch
  onLaunch () {}

  // 对应 onShow
  componentDidShow () {}

  // 对应 onHide
  componentDidHide () {}

  render () {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return (
      <Provider store={store}>
        /* this.props.children 是将要被渲染的页面 */
        {this.props.children}
      </Provider>
    )
  }
}

export default App
```



---

上一篇：[2. Taro的安装及项目初始化](taro1.md)

下一篇：[4. Taro的路由以及底部导航栏的添加](taro4.md)