---
title: Javascript-Array
tags: 
- Javascript
- Array
- Array内置方法
categories: 
- JavaScript
- Array
---

# 数组some跟every的区别
- 相同点
  - 都会对数组进行遍历，然后对该数组的每一项执行特定函数，返回值为布尔值。

- 不同点
  - every()数组的每一项都必须为true,才会返回true,如果有一项为false，他就会返回false
  - some()数组的其中一项为true，就会返回true。否则就返回false
总结：
every()方法类似于‘&&’
some()方法类似于‘||’
