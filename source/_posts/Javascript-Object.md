---
title: Javascript-Object
tags: 
- Javascript
- Object
- Object内置方法
categories: 
- JavaScript
- Object
---

# Object.entries()和Object.fromEntries()

## 一、 Object.entries()
`Object.entries()`方法返回一个给定对象自身可枚举的键值对数组
其排列与使用`for...in`循环遍历改对象时返回的顺序一致（区别在于for-in循环还会枚举原型链中的属性）.
比如:
```js
const obj = {
    name: 'jimmy',
    age: 18
}
const entries = Object.entries(obj)
console.log("entries:", entries)
```
结果如下:
![输出结果](http://rh1om80i6.hn-bkt.clouddn.com/object.entries.png)
- 总结:
1. 当一个对象需要数组的某些方法进行操作
2. 就可以使用 `Object.entries`把对象转为数组
3. 注意的是，改方法只会遍历对象本身上面的属性，无法遍历原型链上的属性
4. 转成的数组是个二维数组

## 二、 Object.fromEntries()
<!--more-->
`Object.fromEntries()` 方法把键值对列表转换为一个对象。
就是`Object.entries`的反向操作
把一个二维数组转成一个对象

例子:
```js
const keyValuePair = [
  ['cow', ' '],
  ['pig', ' '],
];
Object.fromEntries(keyValuePair);
```

### 1、Object 转换操作
```js
const obj = {
    name: 'jimmy',
    age: 18
}
const entries = Object.entries(obj)
console.log(entries)   // [Array(2), Array(2)]

const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)   // {name: "jimmy", age: 18}
```

### 2、Map 转 Object
```js
const map = new Map()
map.set('name', 'jimmy')
map.set('age', 18)
console.log(map)   // {'name' => 'jimmy', 'age' => 18}

const obj = Object.fromEntries(map)
console.log(obj)   // {name: "jimmy", age: 18}
```

### 3、过滤
```js
const course = {
    math: 80,
    english: 85,
    chinese: 90
}
const res = Object.entries(course).filter(([key, val]) => val > 80)
console.log(res)  // [ [ 'english', 85 ], [ 'chinese', 90 ] ]
console.log(Object.fromEntries(res))  // { english: 85, chinese: 90 }
```

### 4、url的search参数转换
```js
const queryString = "?name=jimmy&age=18&height=1.88";
const queryParams = new URLSearchParams(queryString);
const paramObj = Object.fromEntries(queryParams);
console.log(paramObj);  // { name: 'jimmy', age: '18', height: '1.88' }
```


   