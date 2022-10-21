---
title: vue3响应式原理


tags: 
- Vue
categories: 
- JavaScript
- Vue
---

# 一、 响应式的基本原理
> 1.通过ES6的Proxy代理对象，通过set、get来监听对象的读写
> 2.观察者模式(发布-订阅者)
> 订阅者-Watcher:
> update():当事件发生时，具体要做的事情(更新视图或数据)
> 发布者-Dep
> ① subs数组:储存所有的订阅者
> ② addSub():添加订阅者
> ③ notify():事件发生时，通知消息给订阅者
> 3.当数据发生改变通过发布者订阅者模式来进行通知进行数据更新界面刷新等操作

# 二、响应过程
> 对数据data进行劫持监听，所以需要设置一个<font color='red'>**监听器Observer**</font>,用来监听所有属性。如果属性发生变化，就需要告诉<font color=red>**订阅者Watcher**</font>看是否需要更新。因为订阅者有很多个，所以需要一个消息<font color='red'>**订阅器(发布者)Dep**</font>来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理。
> ![响应过程](http://47.108.157.148:5532/i/2022/10/20/r21xxo.png)
<!--more-->

# 三、代码
```JS
// 发布订阅者
// 发布者
class Dep {
constructor(){
  this.subs = [] // 储存订阅者数组
}
addSub(watch){
  // 添加订阅者到 数组
  this.subs.push(watch)
}
// 通知订阅者
notify(){
  this.subs.forEach(item=>{
    item.update()
  })
}
}
// 订阅者
class Watcher{
  constructor(name){
    this.name = name
  }
  update(){
    console.log(this.name+'update');
  }
}
// 创建一个发布者
const dep = new Dep()
// 订阅者
const watch = new Watcher('一')
// 添加订阅者
dep.addSub(watch)
const origin = {}
const obj = new Proxy(origin, {
  get: function (target, propKey, receiver) {
		return Reflect.get(target, propKey, receiver)
  },
  set:function(target, key, value){
    console.log(target,'target');
    console.log(key,'propkey');
    console.log(value,'value');
    // console.log(proxy,'proxy');
    dep.notify()
    return Reflect.set(target,key,value)
  }
});
console.log(obj.a,'obj.a')
obj.a = 50
obj.a = 70
console.log(obj.a,'obj.a is 50')
```
# 四、 简易的reactive

```JS
let targetMap = new WeakMap();
let activeEffect;
function track (target,key){ // {num:0}  num
let depsMap = targetMap.get(target) // false
console.log(depsMap,'depsMap');
if(!depsMap){
  targetMap.set(target,(depsMap = new Map()))
  console.log(targetMap,'targetMap');
}
let dep = depsMap.get(key)
if(!dep){
  depsMap.set(key,(dep = new Set()))
}
if(!dep.has(activeEffect)){
  dep.add(activeEffect)
}
}

function trigger (target,key){
    const depsMap = targetMap.get(target)
    if(!depsMap)return
    const effects = new Set()
    depsMap.get(key).forEach(e=>effects.add(e))
    effects.forEach(e => e())
}

function effect(fn){
  const _effect = function(...args){
    activeEffect = _effect
    return fn(...args)
  }
  _effect()
  return _effect
}


function reactive(target){
return new Proxy(target,{
  get(target,prop){
    track(target,prop)
    return Reflect.get(target, prop);
  },
  set(target,prop,newVal){
    Reflect.set(target, prop,newVal);
    trigger(target,prop)
    return true
  }
})
}

function mount(instance, el) {
  effect(function() {
    instance.$data && update(el, instance);
  })
  instance.$data = instance.setup();
  update(el, instance);
}

function update(el, instance) {
  el.innerHTML = instance.render()
}

const App = {
  $data: null,
  setup () {
    let count = reactive({ num: 0 })
    // setInterval(() => {
    //   count.num += 1;
  
    // }, 1000);

    return {
      count
    };
  },
  render() {
    return this.$data.count.num
  }
}

setTimeout(()=>{
  mount(App, document.querySelector('#test'))
},500)
```