# React 学习笔记_2021/5/29

*第一步：要使用 React 进行网站开发，首先需要配置 Node.js 环境*<br/>
下载 ```Node.js``` https://nodejs.org/en/

# Node js

**参考文章** <br/>
原文 https://link.zhihu.com/?target=http%3A//www.sitepoint.com/node-js-is-the-new-black/<br/>
译文 https://www.zhihu.com/question/33578075

## 1、同步与异步

二者的概念是围绕消息通信机制 **(“调用”这个行为本身)** 建立的

**同步** 一个调用发出之后，在没有得到结果之前，该调用不会被返回，一旦调用返回就会得到返回值<br/>
**异步**  一个调用在发出之后就立即被返回了，所以没有返回值。被调用者需要通过状态、通知来告知调用者，或者通过回调函数来处理这个调用。

Node.js 就是典型的异步式变成模型

## 2、阻塞与非阻塞

阻塞与非阻塞关注的是程序 **(调用者)** 在等待调用结果时的状态

**阻塞**  在调用结果返回之前，当前线程会被挂起，在得到结果之后才会返回<br/>
**非阻塞**  再不能立刻得到结果时，该调用不会阻塞当前线程

(**未完待续**)
<hr/>
 
*第二步：在终端内输入代码*
```
npx create-react-app my-app
cd my-app
npm start
```
# npm

参考文章<br/>
https://zhuanlan.zhihu.com/p/24357770

在 GitHub 兴起之前，程序员普遍通过网址来共享源代码<br/>
比如如果你想在你的网站里用到 jQuery ，就需要点击官网上的下载链接<br/>
但随着需要安装的代码包越来越多，这种方式变得很麻烦<br/>
于是由 JavaScript 写成的 npm (Node Package Manager) 诞生了

例如，当我们需要一个叫做 jQuery 的代码包时候，只用把它写到 ```package.js``` 中<br/>
然后在终端里输入 ```npm install``` 即可

npm 包管理器是内置在 Node.js 框架内的

**注<br/>**
npm 和 yarn 的选择：<br/>
无脑选择 yarn 即可 https://zhuanlan.zhihu.com/p/27449990


# React 学习笔记_2021/6/2

# Clss 组件的生命周期

# render 函数