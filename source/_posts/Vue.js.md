---
title: Vue.js


tags: 
- Vue
categories: 
- JavaScript
- Vue
---
# Vue 生命周期
## 什么是生命周期
>Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期

## Vue2生命周期
| 生命周期 | 描述 |
| :-----| :---- |
| beforeCreate | 组件实例被创建之初，data 和 methods 中的数据还没有初始化 |
| created | 组件实例已经完全创建，data 和 methods 都已经初始化好了 |
| beforeMount | 模板渲染，相关的 render 函数首次被调用，模板已经在内存中编译好了，但是尚未挂载到页面中去 |
| mounted | el 被新创建的 vm.e l 替 换 ， 真 实 d o m 已 经 生 成 ， el 替换，真实 dom 已经生成，el替换，真实dom已经生成，el 可用，组件脱离创建阶段，进入运行阶段 |
| beforeUpdate | 组件数据更新之前调用， 此时页面中显示的数据还是旧的，但 data 是最新的，页面尚未和最新的数据保持同步 |
| update | 组件数据更新之后，页面和 data 数据已经保持同步，都是最新的 |
| beforeDestory | 组件销毁前调用，vue 实例从运行阶段进入到销毁阶段，这时 vue 实例身上所有都可用，还没有真正执行销毁 |
| destoryed | 组件销毁后调用，vue 实例上的所有都不可以用了 |
| activited | keep-alive 专属，组件被激活时调用 |
| deactivated | keep-alive 专属，组件被销毁时调用 |
<!--more-->
## Vue3生命周期
- 选项式API的生命周期钩子
| 生命周期 | 描述 |
| :-----| :---- |
| beforeCreate | 在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用 |
| created | 在实例创建完成后被立即同步调用 |
| beforeMount | 在挂载开始之前被调用 |
| mounted | 在实例挂载完成后被调用 |
| beforeUpdate | 在数据发生改变后，DOM 被更新之前被调用 |
| update | 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用 |
| beforeUnmount | (在Vue2中是：beforeDestroy)：在卸载组件实例之前调用 |
| unmounted  | (在Vue2中是： destroyed)：卸载组件实例后调用 |
| activited | keep-alive 专属，组件被激活时调用 |
| deactivated | keep-alive 专属，组件被销毁时调用 |
- 组合式API的生命周期钩子
>组合式 API 上的生命周期钩子与选项式 API 的名称相同，但前缀为 on：即 mounted 看起来会

| 选项式API | 组合式API(setup) |
| :-----| :---- |
| beforeCreate | Not needed* |
| created | Not needed* |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| update | onUpdate |
| beforeUnmount | onBeforeUnmount |
| unmounted  | onUnmounted |
| activited | keep-alive 专属，组件被激活时调用 |
| deactivated | keep-alive 专属，组件被销毁时调用 |
> 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。

