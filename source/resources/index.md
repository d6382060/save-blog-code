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

# 将图片转为base64
## 利用xhr请求将图片转为base64
```js
function getBase64(imgUrl) {
    window.URL = window.URL || window.webkitURL;
    var xhr = new XMLHttpRequest();
    xhr.open("get", imgUrl, true); // 发送请求
    xhr.responseType = "blob"; // 请求类型
    xhr.onload = function(){ // 监听请求
        if(this.status == 200){ //成功
            //得到一个blob对象
            var blob = this.response;  // 包含图片大小和图片格式
            console.log("blob", blob)
            // 至关重要
            let oFileReader = new FileReader();
            oFileReader.onloadend = function(e){ // 当读取操作完成时调用,不管是成功还是失败
                // 此处拿到的已经是base64的图片了,可以赋值做相应的处理
                console.log(e.target.result) // 拿到base64
            }

            // 异步读取文件内容，结果用data:url的字符串形式表示
            oFileReader.readAsDataURL(blob); 
        }
    }
    xhr.send(); // 发送请求
}
```
## 利用canvas将图片转为base64
```js
function convertImgToBase64(url, callback) {
        let canvas = document.createElement('canvas'), // 创建canvas
        ctx = canvas.getContext('2d'), // 这只为2d
        img = new Image(); 创建图片对象
        img.crossOrigin = 'anonymous';//解决Canvas.toDataURL 图片跨域问题
        img.onload = () => { // 监听图片加载
          canvas.height = img.height; // 给canvas赋值与图片同宽高
          canvas.width = img.width;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // 绘制图片到canvas

       // 获取到图片的格式 转小写
          let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase(); 
          let dataURL = canvas.toDataURL("image/" + ext); // 得到base64 编码的 dataURL
          callback && callback(dataURL); // 回调函数返回结果，也可以直接return
          canvas = null; // 释放canvas
        };
        img.src = url; // 设置图片
      }
 
var  baseUrl = ''
convertImgToBase64(this.options.logo, (baseUrl) => {
    baseUrl = baseUrl
})
```
<!--more-->

