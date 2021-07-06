# 组合与继承 & Context

## 1. Context
在React中数据是通过 props 属性自上而下（由父及子）进行传递的，<br/>
Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

### React.createContext

```
const MyContext = React.createContext(defaultValue);
```

