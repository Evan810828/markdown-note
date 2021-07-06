## 2021/6/1
### *trigger--使用 Class 组件传参*
# ES6 类组件

## 1. 什么是父组件
答：子组件在父组件中被调用，**父子组件**与**父类子类** **不是**同一回事

## 2. Constructor
一个类中只能定义一个 ```constructor``` 函数<br/>
(多次定义将出现 SyntaxError 错误)<br/>
在构造函数中，可以用 ```super``` 关键字来调用父类的构造函数<br/>
```
class Square extends Polygon {
    constructor(length) {
        // 在这里, 它调用了父类的构造函数, 并将 lengths 提供给 Polygon 的"width"和"height"
        super(length, length);
        // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
        // 忽略这个，将会导致一个引用错误。
        this.name = 'Square';
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        // 注意：不可使用 this.area = value
        // 否则会导致循环call setter方法导致爆栈
        this._area = value;
    }
}

```

## 3. React.Component 类
在写 calendar weapp 时，我们一般用 Class 的形式来建立 React 组件
```
export default class Index extends React.Component{
    render(){
        return(
            ...
        )
    }
}
```
而若需要使用 React 组件，就必须要继承 React.Component 类<br/>
要实现继承只需要在声明class时加上 `extend` 关键字

但是如果想要实现 class 组件之间传参，我们一般需要重写 (overwrite) `constructor` 构造函数

因此，我们在进行父子组件传参的时候，在 `constructor` 构造函数中，一定要加入 super() 字段


现已更新 [React 组合与继承 & Context](../../note/react/doc/react_official_document/组合与继承&Context.md)