---
title: 资源
date: 2022-08-30 9:25:00
top: true
comments: false
---



# 利用css绘制虚线（非边框线）
```stylus
  width 1rpx
  background-image linear-gradient(#a2a2a2 35%, rgba(255,255,255,0) 0%) // 35%设置虚线点y轴上的长度
  background-position left // right配置右边框位置的虚线
  background-repeat repeat-y
  background-size 1px 10px // 第一个参数设置虚线点x轴上的长度；第二个参数设置虚线点的间距
  ```