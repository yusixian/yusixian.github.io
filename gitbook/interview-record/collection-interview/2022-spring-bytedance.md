---
description: 体验很好，面试官很和蔼，但是凉凉
---

# 2022春暑期实习字节前端一面凉经

* 前端学习是怎么学的？
  * MDN、训练营、红宝书等等……系统性的学习了俩月吧

## 网络相关

* 浏览器输入url过程
  * 解析url在本地host文件查询找到DNS解析得对应IP地址等
  * 三次握手建立TCP连接，HTTPS协议的话还要进行TLS握手
  * 服务端接受请求后返回响应
  * 浏览器根据响应进行解析生成html树和CSSOM树（DOM树！记错了！！）
* DNS查找过程展开说说？
  * 挖坑- - 我答得现在本地的host文件查询，若有对应IP就直接返回，然后在路由器查询，然后再去DNS服务器查询
  * 那对根服务器的一个了解不是很多是吧 （嗯嗯，寄）
* TCP连接
  * 面向字节流，提供可靠的传输服务，需要三次握手
  * 展开三次握手讲讲（巴拉巴拉巴拉，挖坑×2）
  * 你提到了两次握手不安全，原因是啥
    * 两次握手的话服务端不知道客户端收到报文的能力是否正常
  * 最后一次握手讲一下（前边没说清楚，不太记得了，淦，回头开一篇博客详细讲讲）
* TCP和UDP区别
  * UDP无连接、不可靠，传输数据更快
  * UDP的应用场景多为丢包不重要的
  * 还有其他的吗？（……）
* TCP拥塞控制了解过吗，讲讲
  * 拥塞窗口、超时重传、慢开始和快重传（坏了，快重传、快恢复这里混淆了）
  * 应该是慢开始、拥塞避免、加性增和减性乘、快重传、快恢复

## HTML相关

* DOM树和CSSOM树构建过程（前面挖的坑）
* 加载JS资源、CSS资源对页面有什么影响吗（阻不阻塞）
  * JS资源，讲了async和defer
  * CSS资源是在啥时候解析的，会不会阻塞DOM结点的构建？（寄，我觉得是并行的）
    * 不会阻塞解析还是渲染？

## 前端安全这一块的了解？

* XSS、CSRF、SQL注入、dos和ddos
  * 预防措施展开讲讲（处理用户输入、转义，不盲目信任用户输入）
  * CSRF咋防？（只知道要HTTPS，语无伦次了，复习！）
* 跨域讲讲
* 跨域解决方法？
  * 主要讲了讲CORS，简单请求和非简单请求
    * 讲讲简单请求和非简单请求，预检请求
  * 其他jsonp啥的没细说

复习-> [Web开发的安全之旅](https://ysx.cosine.ren/cn/%E3%80%90%E7%AC%AC%E4%BA%8C%E5%B1%8A%E9%9D%92%E8%AE%AD%E8%90%A5-%E5%AF%92%E5%81%87%E5%89%8D%E7%AB%AF%E5%9C%BA%E3%80%91-%20Web%E5%BC%80%E5%8F%91%E7%9A%84%E5%AE%89%E5%85%A8%E4%B9%8B%E6%97%85/#CSRF%E6%94%BB%E5%87%BB%E9%98%B2%E5%BE%A1)

## CSS相关

* CSS选择器优先级（八类，只说了4类，其他的想不起来名字- -CSS方面显然较弱）
  * 类型、类和ID选择器、标签属性选择器、伪类与伪元素、运算符、内联样式
  * 内联样式 > ID > 类 > 类型……看看[CSS选择器](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building\_blocks/Selectors)
* CSS垂直水平居中（答得也不太好，有必要去恶补CSS了）
  * flex
  * margin auto

## JS相关

* 经典基本数据类型
* 如何判断一个变量类型
  * 我答的typeof加一些特殊限制（后面想了想对哦还有 `Object.prototype.toString()`）
* 原型链讲讲
* 一道题 写出p与Person的关系（尽可能多） ↓我的回答

```javascript
function Person() {}
let p = new Person();
// 写出p与Person的关系（尽可能多） ↓我的回答
console.log(p.__proto__ === Person.prototype); // true
console.log(p.constructor === Person);  // true
console.log(Person.prototype.__proto__ === Object.prototype);  // true
console.log(p instanceof Person);  // true
console.log(p instanceof Object);  // true
```

* 又一道题，看输出

```javascript
function Foo() {
    getName = function() {
        console.log('1');
    }
    return this;
}
Foo.getName = function() { console.log('2'); }
Foo.prototype.getName = function() { console.log('3'); }
var getName = function() {
    console.log('4');
}
// 判断以下输出
Foo.getName();          
getName();              
new Foo().getName();    
getName();             
```

* 答案是 2 4 3 1捏

## 代码题

二叉树层序遍历（秒）

## 反问

* 部门业务/技术栈（面试官答得可详细）
  * 影像方面，字节系的影像APP，剪映、轻颜等，不止涉及到页面还有跨端的一些项目，内部还有跨端框架要研究，还有B端的一些东西，安全方面还有可能用go，前端技术栈主要是React+Node+TS。
* 对我的评价/可以改进的地方
  * 基本的了解都是有的，不过有些知识点不够细，深挖的东西还需要好好补一下（还是写太少）
