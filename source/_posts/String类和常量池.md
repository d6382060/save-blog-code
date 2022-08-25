---
title: String类和常量池


tags: 
- Java
categories: 
- Java
- String类
- 常量池
---
<font color='#4da8ee'>JVM常量池:</font>

主要分为Class文件常量池、**运行**时常量池，全局字符串常量池，以及基本类型包装类对象常量池

<font color='#4da8ee'>常量:</font>

- 用 final 修饰的成员变量表示常量，值一旦给定就无法改变！
- final 修饰的变量有三种：静态变量、实例变量和局部变量，分别表示三种类型的常量。


# 1.String类的概念（重点）
- 改类使用final关键字修饰，表示该类不能被继承
- exends object 继承自对象，所以前面章节中重写的equals/hashcode/tostring都继承下来了，而且本类还实现了一些接口。
- 从jdk1.9开始该类的底层不使用char[]来存储数据，而是改成 byte[]加上编码标记，从而（实际上目的）<font clolr='font'></font>。


# 2.常量池的概念

由于String类型描述的字符串内容是常量不可改变，因此Java虚拟机将<font color="red">首次出现</font>的字符串放入常量池中，若后续代码中出现了相同字符串内容则<font color="red">直接使用</font>池中已有的字符串对象而无需申请内存及创建对象，从而提高了性能。
首次出现的字符串放入常量池中，再次使用的时候就不需要重新创建对象直接在常量池中拿出来使用就好了
