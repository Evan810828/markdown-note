# Package-lock.json 文件

参考文章:<br/>
1、https://www.jianshu.com/p/2e459040a29f<br/>
2、https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json<br/>
**3、https://segmentfault.com/a/1190000017075256**

## 官方定义
package-lock.json它会在npm更改node_modules目录树或者package.json时自动生成的，它准确的描述了当前项目npm包的依赖树，并且在随后的安装中会根据package-lock.json来安装，保证是相同的一个依赖树，不考虑这个过程中是否有某个依赖有小版本的更新


<br/>
*水很深，不敢裸泳*<br/>
2021/6/11