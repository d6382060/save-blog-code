---
title: call、apply、bind 作用和区别
tags: 
- JavaScript
- this
categories: 
- JavaScript
---

# call、apply、bind的作用
>1. 关于call、apply、bind函数，它们主要用来改变this指向的。

## call的用法
第一个参数：为要指向的对象，后面的参数为，调用方法传入的参数
>fn.call(thisArg, arg1, arg2, arg3, ...)
```vue
	<template>
	  <div>
	    <button @click="changeThis">点击改变this指向</button>
	  </div>
	</template>
	<script>
	  export default {
	    data() {
	      return {
	        
	      };
	    },
	    // 在 `methods` 对象中定义方法
	    methods: {
	      changeThis(){
	        let obj = {
	          name: "小明",
	          age: 19,
	          sayHello: function (job, hobby) {
	            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
	          }
	       }
	        obj.sayHello('程序员', '开心');   //运行结果 ： 我叫小明,今年19岁。我的工作是: 程序员，我的爱好是: 开心。
	        let obj1 = {
	          name: "末晨曦吖",
	          age: 18
	        }
	        //call修改this指向了 obj1
	        obj.sayHello.call(obj1, '前端', '要开心吖');  //运行结果 ：我叫末晨曦吖,今年18岁。我的工作是: 前端，我的爱好是: 要开心吖。
	      }
	    },
	  };
	</script>
	<style scoped>
	
	</style>
```
<!--more-->
## apply的用法
> 1. apply(thisArg, [argsArr])
> 2. fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，
> 3. 第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。

```vue
	<template>
	  <div>
	    <button @click="changeThis">点击改变this指向</button>
	  </div>
	</template>
	<script>
	  export default {
	    data() {
	      return {
	        
	      };
	    },
	    // 在 `methods` 对象中定义方法
	    methods: {
	      changeThis(){
	        let obj = {
	          name: "小明",
	          age: 19,
	          sayHello: function (job, hobby) {
	            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
	          }
	       }
	        obj.sayHello('程序员', '开心');   //运行结果 ： 我叫小明,今年19岁。我的工作是: 程序员，我的爱好是: 开心。
	        let obj1 = {
	          name: "末晨曦吖",
	          age: 18
	        }
	        //apply修改this指向了 obj1
	        obj.sayHello.apply(obj1, ['前端', '要开心吖'] );  //运行结果 ：我叫末晨曦吖,今年18岁。我的工作是: 前端，我的爱好是: 要开心吖。
	      }
	    },
	  };
	</script>
	<style scoped>
	
	</style>
```
## bind的用法
>1. bind(thisArg, arg1, arg2, arg3, ...)
>2. fn.bind的作用是只修改this指向，但不会立即执行fn；会返回一个修改了this指向后的fn。
>3. 需要调用才会执行:bind(thisArg, arg1, arg2, arg3, ...)()。bind的传参和call相同。

```vue
	<template>
	  <div>
	    <button @click="changeThis">点击改变this指向</button>
	  </div>
	</template>
	<script>
	  export default {
	    data() {
	      return {
	        
	      };
	    },
	    // 在 `methods` 对象中定义方法
	    methods: {
	      changeThis(){
	        let obj = {
	          name: "小明",
	          age: 19,
	          sayHello: function (job, hobby) {
	            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
	          }
	       }
	        obj.sayHello('程序员', '开心');   //运行结果 ： 我叫小明,今年19岁。我的工作是: 程序员，我的爱好是: 开心。
	        let obj1 = {
	          name: "末晨曦吖",
	          age: 18
	        }
	        //bind修改this指向了 obj1
	        obj.sayHello.bind(obj1, '前端', '要开心吖' );  //运行结果 ：无输出结果，因为没有调用;call和apply是主动调用，bind是被动调用;
	        obj.sayHello.bind(obj1, '前端', '要开心吖' )();  //运行结果 ：我叫末晨曦吖,今年18岁。我的工作是: 前端，我的爱好是: 要开心吖。
	      }
	    },
	  };
	</script>
	<style scoped>
	
	</style>
```

# 二、call、apply、bind 的区别
- 相同点
  - 三个都是用于改变this指向；
  - 接收的第一个参数都是this要指向的对象；
  - 都可以利用后续参数传参

- 不同点
  - call和bind传参相同，多个参数依次传入的；
  - apply只有两个参数，第二个参数为数组；
  - call和apply都是对函数直接进行调用，而bind方法不会立即执行函数(需要手动调用)，而是返回一个修改this后的函数
  - 修改this的性质不同：
    - call、apply只是临时的修改一次，也就是call和apply方法的那一次；当再次调用原来函数时，它的指向还是原来的指向
    - bind是永久修改函数this的指向，但是它修改的不是原来的函数；而是返回一个修改过后的函数，此函数的this永远的被改变，绑定了就不能再次修改


