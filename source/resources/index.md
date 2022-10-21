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
# Vue3自定义指令
## 实现拖拽元素
```js
// 在模板中启用 v-test
let isDrag = false
export let test = {
  created(el, binding, vnode){
    // 保存事件
    let click = vnode.props.onClick
    // 重写点击事件，如果是拖动结束后不执行点击事件
    vnode.props.onClick = ()=>{
      if(isDrag) return
      click()
    }
    console.log(el,'el');
    console.log(binding,'binding');
    console.log(vnode,'vnode');
      /**
       * 获取客户端可见内容的高度
       *
       * @returns {number}
       */
       const getClientHeight = () => {
        return window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight)
      }
      
        /**
       * 获取客户端可见内容的宽度
       *
       * @returns {number}
       */
         const getClientWidth = () => {
          return window.innerWidth || Math.min(document.documentElement.clientWidth, document.body.clientWidth)
        }
  /**
       * startX = null:获取鼠标相对于元素（左上顶点）的x轴坐标（移动前坐标）
       * startX != null:获取移动后的左上顶点x轴坐标
       *
       * e.clientX:鼠标相对客户端（客户端左上顶点）的x轴坐标
       * el.offsetLeft:元素顶点（左上顶点）相对客户端（客户端左上顶点）的x轴坐标（元素必须脱离文档流，position: fixed or absolute）
       * el.clientWidth:元素宽度
       *
       * @param el
       * @param e
       * @param startX
       * @returns {number}
       */
   const getX = (el, e, startX) => {
    if (startX === null) {
      // 返回鼠标相对于元素（左上顶点）的x轴坐标
      return e.clientX - el.offsetLeft
    }

    // 客户端可视宽度
    const clientWidth = getClientWidth()
    // 元素自身宽度
    const elWidth = el.clientWidth

    // 移动到x轴位置
    let x = e.clientX - startX
    // 水平方向边界处理
    if (x <= 0) {
      // x轴最小为0
      x = 0
    } else if (x + elWidth > clientWidth) {
      // x是左上顶点的坐标，是否触碰到右边边界（超出可视宽度）要通过右顶点判断，所以需要加上元素自身宽度
      x = clientWidth - elWidth
    }

    return x
  }
 /**
       * startY = null:获取鼠标相对于元素（左上顶点）的y轴坐标（移动前坐标）
       * startY != null:获取移动后的左上顶点y轴坐标
       *
       * e.clientY:鼠标相对客户端（客户端左上顶点）的y轴坐标
       * el.offsetTop:元素顶点（左上顶点）相对客户端（客户端左上顶点）的y轴坐标（元素必须脱离文档流，position: fixed or absolute）
       * el.clientHeight:元素高度
       *
       * @param el
       * @param e
       * @param startY
       * @returns {number}
       */
  const getY = (el, e, startY) => {
    if (startY === null) {
      // 返回鼠标相对于元素（左上顶点）的y轴坐标
      return e.clientY - el.offsetTop
    }

    // 客户端可视高度
    const clientHeight = getClientHeight()
    // 元素自身高度
    const elHeight = el.clientHeight

    // 移动到y轴位置
    let y = e.clientY - startY
    // 垂直方向边界处理
    if (y <= 0) {
      // y轴最小为0
      y = 0
    } else if (y + elHeight > clientHeight) {
      // 同理，判断是否超出可视高度要加上自身高度
      y = clientHeight - elHeight
    }

    return y
  }
/**
       * 监听鼠标按下事件（PC端拖动）
       *
       * @param e
       */
 el.onmousedown = (e) => {
  isDrag = false
  
  // 获取当前位置信息 (startX,startY)
  const startX = getX(el, e, null)
  const startY = getY(el, e, null)

  /**
   * 监听鼠标移动事件
   *
   * @param e
   */
  document.onmousemove = (e) => {
    // 标记正在移动，解决元素移动后点击事件被触发的问题
    isDrag = true

    // 更新元素位置（移动元素）
    el.style.left = getX(el, e, startX) + 'px'
    el.style.top = getY(el, e, startY) + 'px'
  }

 }
  /**
         * 监听鼠标松开事件
         */
   document.onmouseup = () => {
    // 移除鼠标相关事件，防止元素无法脱离鼠标
    document.onmousemove =  null

  }


  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated(){},
  beforeUnmount() {

  },
  unmounted() {}
}
```

