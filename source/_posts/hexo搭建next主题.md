---
title: hexo搭建next主题

top: true
tags: 
- next主题
- hexo框架
- Github
categories: 
- hexo
- next
---

> 使用next主题的前提是需要安装好 Node.Js、Hexo以及注册好Github账户;

# Github相关
## 一、注册Github

打开官网:[Github官网](https://github.com/)

1.点击  <b>*sign up*</b> 注册

2.填写相关信息点击 <b>*Next: select a plan*</b>进入下一页

3.选择账户类型：GitHub 的仓库分为两种，一种是public repositories公开免费版，一种是private repositories私有付费版其中，免费版是完全公开的，而私有版一般是由企业或者不愿公开仓库的个人用户购买，在这里，我们选择免费版就可以，然后点击 <b>*Choose Free*</b>，进入下一页

4.有一个问卷调查，填不填都无所谓，如果填完就点击 <b>*Complete setup*</b>, 如果不想填就点击 <b>*Skip this step*</b> 跳过。

5.接下来就是验证邮箱地址了，GitHub会发送邮件到你刚才填的邮箱地址，例如我填的是QQ邮箱，登录QQ邮箱，打开收到的邮件，点击 <b>*Verify email address*</b>, 进入Github的登录界面，点击<b>*sign in*</b>会要求填写验证码，再次进入邮箱查看验证码，填写后登录

6.进入Github后先创建一个代码仓库




打开官网:[Github](https://github.com/)

1.点击  <b>*sign up*</b> 注册

2.填写相关信息点击 <b>*Next: select a plan*</b>进入下一页

3.选择账户类型：GitHub 的仓库分为两种，一种是public repositories公开免费版，一种是private repositories私有付费版其中，免费版是完全公开的，而私有版一般是由企业或者不愿公开仓库的个人用户购买，在这里，我们选择免费版就可以，然后点击 <b>*Choose Free*</b>，进入下一页

4.有一个问卷调查，填不填都无所谓，如果填完就点击 <b>*Complete setup*</b>, 如果不想填就点击 <b>*Skip this step*</b> 跳过。

5.接下来就是验证邮箱地址了，GitHub会发送邮件到你刚才填的邮箱地址，例如我填的是QQ邮箱，登录QQ邮箱，打开收到的邮件，点击 <b>*Verify email address*</b>, 进入Github的登录界面，点击<b>*sign in*</b>会要求填写验证码，再次进入邮箱查看验证码，填写后登录

6.进入Github后先创建一个代码仓库
<!--more-->
## 二、Git安装

1.打开Git官网:[Git官网](https://git-scm.com/)，点击 <b>*Downloads*</b>下载，选择对应系统类型，下载完成后直接 Next 安装，安装完成后直接打开 Git Bash 即可，点击鼠标右键如果存在 Git Bash 就证明安装成功

## 三、绑定GitHub并提交文件

### 1.绑定GitHub
>我们要用git上传文件到GitHub首先得利用SSH登录远程主机，而登录方式有两种：一种是口令登录；另一种是公钥登录。口令登录每次都要输入密码十分麻烦，而公钥登录就省去了输入密码的步骤，所以我们选择公钥授权。首先我们得在 GitHub 上添加 SSH key 配置，要想生成SSH key，就要先安装 SSH，不过我们安装了 Git Bash，其应该自带了 SSH。检验一下是否安装 SSH，我们在新建的文件夹中右键打开 Git Bash：输入 ssh 命令，查看本机是否安装 SSH如已安装 SSH. 然后，输入 ssh-keygen -t rsa 命令（注意空格），表示我们指定 RSA 算法生成密钥，然后敲四次回车键，之后就就会生成两个文件，分别为秘钥 id_rsa 和公钥 id_rsa.pub. （注意：git中的复制粘贴不是 Ctrl+C 和 Ctrl+V，而是 Ctrl+insert 和 Shift+insert.）文件的位置在 Git Bash 上面都有显示，默认生成在以下目录：
- Linux 系统：~/.ssh
- Mac 系统：~/.ssh
- Windows 10 ：C:/Users/ASUS/.ssh

接下来我们要做的事情就是把公钥 id_rsa.pub 的内容添加到 GitHub。复制公钥 id_rsa.pub 文件里的内容，你可以通过目录找到 id_rsa.pub 文件的位置，用记事本打开文件复制。如果你实在找不到文件也没有关系，按照以下步骤直接在 Git Bash 上打开就行：

```ssh
$ cd ~/.ssh 
$ ls
$ cat id_rsa.pub

接下来进入我们的 GitHub 主页，先点击右上角，再点击 settings
先点击 SSH and GPG keys，再点击 New SSH key.
将复制的公钥 id_rsa.pub 的内容粘贴到 key 内，再点击 Add SSH key
验证是否成功，我们可以通过在 Git Bash 中输入 ssh -T git@github.com 进行检验
```
### 2.提交文件

提交文件有两种方法:
#### 第一种：本地没有 git 仓库
1.直接将远程仓库 clone 到本地；

2.将文件添加并 commit 到本地仓库；

3.将本地仓库的内容push到远程仓库

#### 本地有 Git 仓库，并且我们已经进行了多次 commit 操作
1.建立一个本地仓库进入，init 初始化；
2.关联远程仓库；
3.同步远程仓库和本地仓库；
4.将文件添加提交到本地仓库；
5.将本地仓库的内容 push 到远程仓库。

#### 第一种方法详细步骤
首先，进入GitHub个人主页：
1.点击进入我新建的 text 项目：在 code 标签下点击右侧绿色的Code，选择HTTPS点击链接右侧的复制按钮
2.在你需要的文件夹下打开Git Bash 输入 git clone https://xxxx(刚刚复制的地址)，将远程仓库 clone 到本地，git status命令查看仓库状态，然后我们使用 git add 命令将文件添加到了「临时缓冲区」，再用 git commit -m "提交信息" 将其提交到本地仓库
3.果你是第一次提交的话，会让你输入用户名和邮箱
>#你只要再加两行代码就行：
>$ git config --global user.name"fengye97"
>$ git config --global user.email"xxx@xxx.com"
4.完成后输入 git log 命令查看仓库提交日志
5.再输入 git status 查看一下仓库状态
6.现在输入 git push origin master 命令，将本地仓库提交到远程仓库，origin是远程主机的名字

#### 第二种方法详细步骤
1.首先，我们建立一个本地仓库 demo，使用 git init 命令初始化这个仓库

2.输入 git remote add origin https://xxx(远程仓库地址) 命令，关联远程仓库，接着输入 git pull origin master 命令，同步远程仓库和本地仓库

3.回到本地仓库，发现我们已经把远程仓库的内容同步到了本地仓库

4.接下来的步骤就与第一种方法一样（可以参考上面，已经写得很详细了），先输入 git add 和 git commit 命令，将要提交的文件添加并提交到 demo 仓库；然后再输入 git push origin master 命令，将本地仓库修改（或者添加）的内容提交到远程仓库就完成啦！！！

# node.js和Hexo

## node.js
### 安装
1.下载地址：[node.js官网](https://nodejs.org/en/)
2.点击LTS 稳定版下载，下载完成后直接next 安装
3.安装完成可以用打开cmd检验一下是否安装成功，用 node -v 和 npm -v 命令检查版本
### 设置npm在安装全局模块时的路径和环境变量
>因为如果不设置的话，安装模块的时候就会把模块装到C盘，占用C盘的空间，并且有可能安装好hexo后却无法使用，所以我们需要设置一下
1.在 nodejs 文件夹中新建两个空文件夹 node_cache、node_global
2.打开cmd，输入如下两个命令
  ```cmd
  npm config set prefix "D:\nodejs\node_global"
  npm config set cache "D:\nodejs\node_cache"
  ```
3.设置环境变量：win10系统 --> 打开控制面板 --> 系统 -->高级系统设置 --> 环境变量 ，然后在系统变量中新建一个变量名为“NODE_PATH”，值为“D:\nodejs\node_global\node_modules”(node的安装目录)

4.然后编辑用户变量里的Path，将相应npm的路径改为：D:\nodejs\node_global

### 测试
在 cmd 命令下执行 npm install webpack -g，然后 webpack 这个模块已经在我们设置默认的文件夹中了

## Hexo
### 安装
1.Hexo就是我们的个人博客网站的框架，在安装之前，我们要先在GitHub上创立一个仓库
2.仓库名称为 用户名.github.io
3.接下来就是安装Hexo，首先在D盘建立一个文件夹 Blog，点开 Blog 文件夹，鼠标右键打开 Git Bush Here，输入npm命令安装Hexo
`npm install -g hexo-cli`
4.安装完成后，输入 hexo init 命令初始化博客
5.然后输入 hexo g 静态部署
6.这时网页已经部署完成，输入 hexo s 命令可以在本地查看

### 将Hexo部署到GitHub
1.现在回到我们的 Blog 文件夹，用笔记本打开 _config.yml 文件
下滑到文件底部，填上如下内容:
```yml
deploy:
  type: git
  repository: https://github.com/fengye97/fengye97.github.io.git  #你的仓库地址
  branch: master
```

2.然后回到 Blog 文件夹中，打开 Git Bash，安装Git部署插件，输入命令
`npm install hexo-deployer-git --save`
3.然后分别输入以下三条命令
```hexo
hexo clean   #清除缓存文件 db.json 和已生成的静态文件 public
hexo g       #生成网站静态文件到默认设置的 public 文件夹(hexo generate 的缩写)
hexo d       #自动生成网站静态文件，并部署到设定的仓库(hexo deploy 的缩写)
```
4.完成以后，打开浏览器，输入 https://xxx.github.io 就可以打开你的网页了

# 设置next主题
## 更换主题

[next主题Github](https://github.com/theme-next/hexo-theme-next)
打开博客根目录Blog文件夹，右键Git Bash，输入如下代码将next主题下载到目录Blog/themes
```git
git clone https://github.com/theme-next/hexo-theme-next themes/next
```
1.打开根目录下的_config.yml(称为站点配置文件)，修改主题（注意冒号后都要有空格）
```yml
# Site
title: D  #标题
subtitle: ''
description: 选择有时候比努力更重要     #简介或者格言
keywords:
author: D     #作者
language: zh-CN     #主题语言
timezone: Asia/Shanghai    #中国的时区 (不能乱改城市)

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next   #主题改为next (此处可更改你下载的主题)
```
 <font color='red' size='2'>tip: 主题语言主要是看你的themes/next/language中的简体中文是 zh-CN 还是 zh-Hans </font>

 next主题有四种，依次为Muse、Mist、Pisces、Gemini
 我选的是Gemini，打开目录Blog/themes/next/下的_config.yml（称为主题配置文件），只要将你选的主题前的#删除就行了
 ```yml
  # Schemes
  #scheme: Muse
  #scheme: Mist
  #scheme: Pisces
  scheme: Gemini    #这是我选的主题
 ```

 回到根目录打开Git Bash，输入如下三条命令,完成后打开博客可以看到效果
 ```hexo
  hexo clean
  hexo g
  hexo d
```

# 优化主题

## 1.设置菜单

打开主题配置文件即themes/next下的_config.yml，查找menu，将前面的#删除就行了
```yml
menu:
  home: / || home                      #首页
  archives: /archives/ || archive      #归档
  categories: /categories/ || th       #分类
  tags: /tags/ || tags                 #标签
  about: /about/ || user               #关于
  resources: /resources/ || download   #资源
  #schedule: /schedule/ || calendar    #日历
  #sitemap: /sitemap.xml || sitemap    #站点地图，供搜索引擎爬取
  #commonweal: /404/ || heartbeat      #腾讯公益404
  ```
  “||”前面的是目标链接，后面的是图标名称，next使用的图标全是[图标库 - Font Awesome 中文网](http://www.fontawesome.com.cn/faicons/#web-application)这一网站的，有想用的图标直接在fontawesome上面找图标的名称就行。resources是我自己添加的。

新添加的菜单需要翻译对应的中文，打开theme/next/languages/zh-CN.yml，在menu下设置

```yml:
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签
  about: 关于
  resources: 资源
  search: 搜索
  ```

在根目录下打开Git Bash，输入如下代码，创建对应的文件夹
```git
hexo new page "categories"  
hexo new page "tags"
hexo new page "about"
hexo new page "resources"
```

此时在根目录的sources文件夹下会生成categories、tags、about、resources四个文件，每个文件中有一个index.md文件，修改内容分别如下
```md
---
title: 分类
date: 2020-02-10 22:07:08
type: "categories"
comments: false
---

---
title: 标签
date: 2020-02-10 22:07:08
type: "tags"
comments: false
---

---
title: 关于
date: 2020-02-10 22:07:08
type: "about"
comments: false
---

---
title: 资源
date: 2020-02-10 22:07:08
type: "resources"
comments: false
---
```
注:<font color='red' size='2'>如果有启用评论，默认页面带有评论。需要关闭的话，添加字段comments并将值设置为false</font>

## 2. 设置建站时间
打开主题配置文件即themes/next下的_config.yml，查找since
```yml
footer:
  # Specify the date when the site was setup. If not defined, current year will be used.
  since: 2020-02   #建站时间
  ```

## 3. 设置头像
打开主题配置文件即themes/next下的_config.yml，查找avatar，url后是图片的链接地址
```yml
# Sidebar Avatar
avatar:
  url: /images/avatar.gif   #图片的位置，也可以是http://xxx.com/avatar.png
  rounded: true   #头像展示在圈里
  rotated: false  #头像随光标旋转
  ```

  ## 4.网站图标设置

免费的图标素材网站：[Easyicon](https://www.easyicon.cc/)
下载16x16和32x32的图标后，打开主题配置文件，查找favicon，只要修改small和medium为你的图标路径

```yml
favicon:
  small: /images/favicon-16x16.png
  medium: /images/favicon-32x32.png
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
  ```

## 5. 设置动态背景
### 5.1 canvas nest 风格
在themes/next目录下打开Git Bash，输入
```git
git clone https://github.com/theme-next/theme-next-canvas-nest source/lib/canvas-nest
```

打开主题配置文件即themes/next下的_config.yml，将下面的代码复制粘贴到themes/next中
```yml
# Canvas-nest
# Dependencies: https://github.com/theme-next/theme-next-canvas-nest
# For more information: https://github.com/hustcc/canvas-nest.js
canvas_nest:
  enable: true
  onmobile: true # Display on mobile or not
  color: "0,0,255" # RGB values, use `,` to separate
  opacity: 0.5 # The opacity of line: 0~1
  zIndex: -1 # z-index property of the background
  count: 99 # The number of lines
  ```

### 5.2 JavaScript 3D library风格
在themes/next目录下打开Git Bash，输入：
```git
git clone https://github.com/theme-next/theme-next-three source/lib/three
```
打开主题配置文件即themes/next下的_config.yml，找到three，这里有三种风格，可以试一下看看喜欢哪种风格，直接将false改为true就行了，我已经选了canvas-nest，就没有选这种风格

```yml
# JavaScript 3D library.
# Dependencies: https://github.com/theme-next/theme-next-three
three:
  enable: true
  three_waves: false
  canvas_lines: false
  canvas_sphere: false
  ```
### 6. 设置背景图片
打开主题配置文件即themes/next下的_config.yml，将 `style: source/_data/styles.styl` 取消注释
```yml
custom_file_path:
  style: source/_data/styles.styl
  ```
打开根目录Blog/source创建文件_data/styles.styl，添加以下内容：
```css
// 添加背景图片
body {
      background: url(images/background.png);//自己喜欢的图片地址
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: 50% 50%;
}
```

### 7. 主页文章(卡片)添加阴影效果

打开`themes/next/source/css/_common/conponents/post/post.styl`，修改.post-block，如下：

```css
.use-motion {
  if (hexo-config('motion.transition.post_block')) {
    .post-block {
      opacity: 0;
      margin-top: 60px;
      margin-bottom: 60px;
      padding: 25px;
      background:rgba(255,255,255,0.9) none repeat scroll !important;
      -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
      -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);

    }
    .pagination, .comments{
      opacity: 0;
    }
  }
  ```

### 8. 添加顶部加载条
在themes/next目录下打开Git Bash，输入：
```git
git clone https://github.com/theme-next/theme-next-pace source/lib/pace
```

打开主题配置文件即themes/next下的_config.yml，找到pace，将enable：false改为true，你还可以选择类型（theme)

```yml
pace:
  enable: true
  # Themes list:
  # big-counter | bounce | barber-shop | center-atom | center-circle | center-radar | center-simple
  # corner-indicator | fill-left | flat-top | flash | loading-bar | mac-osx | material | minimal
  theme: minimal
  ```

### 9. 设置预览摘要
只要我们在文章中插入 <!-- more -->，该标签之上的是摘要，之后的内容不可见，需点击全文阅读按钮
```md
 <!-- more -->
 ```

### 设置侧边栏显示效果
打开主题配置文件即themes/next下的_config.yml，找到Sidebar Settings，设置
```yml
sidebar:
  # Sidebar Position. #设置侧边栏位置
  position: left
  #position: right

  #  - post    默认显示模式
  #  - always  一直显示
  #  - hide    初始隐藏
  #  - remove  移除侧边栏
  display: post
  ```
### 11.侧边栏推荐阅读

打开**主题配置文件**即themes/next下的_config.yml，搜索links（里面写你想要的链接）

```yml
links_settings:
  icon: link
  title: 链接网站  #修改名称

links:
  #Title: http://yoursite.com
  百度: https://baidu.com
  鱼C论坛: https://fishc.com.cn
  ```
### 12. 添加社交链接

打开**主题配置文件**即themes/next下的_config.yml，搜索social

```yml
social:
  GitHub: https://github.com/fengye97 || github
  E-Mail: mailto:yinhongfei1018@163.com || envelope
  知乎: https://www.zhihu.com/people/mai-nv-hai-de-xiao-huo-chai-35-19 || gratipay
  CSDN: https://https://blog.csdn.net/Later_001 || codiepie
  ```
“||”前面的是链接，后面的是 [FontAwesome](http://www.fontawesome.com.cn/faicons/#web-application)图标。


### 13. 设置博文内链接为蓝色并加入下划线

打开`themes/next/source/css/_common/components/post/post.styl`文件，将下面的代码复制到文件最后

```css
.post-body p a{
     color: #0593d3;
     border-bottom: none;
     text-decoration: underline;
     &:hover {
       color: #0477ab;
       text-decoration: underline;
     }
   }
   ```

### 14. 显示文章字数和阅读时长

从根目录Blog打开Git Bash，执行下面的命令，安装插件：
```Bash
npm install hexo-symbols-count-time --save
```
然后打开**站点配置文件**，在文件末尾加上下面的代码：
```yml
symbols_count_time:
  symbols: true # 文章字数统计
  time: true # 文章阅读时长
  total_symbols: true # 站点总字数统计
  total_time: true  # 站点总阅读时长
  exclude_codeblock: false # 排除代码字数统计
  awl: 4
  wpm: 275
  suffix: "mins."
  ```

### 15. 设置文章末尾”本文结束”标记
在路径`/themes/next/layout/_macro` 中新建 `passage-end-tag.swig ` 文件,并添加以下内容：

```swig
<div>
    {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:24px;">-------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------</div>
    {% endif %}
</div>
```
接着打开`/themes/next/layout/_macro/post.swig`文件，在**END POST BODY**后添加代码

```swig
 {% if not is_index and theme.passage_end_tag.enabled %}
   <div>
     {% include 'passage-end-tag.swig' %}
   </div>
 {% endif %}
 ```
 然后打开**主题配置文件**（_config.yml)，在末尾添加：

```yml
# 文章末尾添加“本文结束”标记
passage_end_tag:
  enabled: true
  ```

### 16. 文章末尾添加版权说明  

查找主题配置文件`themes/next/_config.yml`中的creative_commons：
```yml
creative_commons:
  license: by-nc-sa
  sidebar: false
  post: true  # 将false改为true即可显示版权信息
  language:
  ```

### 17. 添加访问量统计
打开**主题配置文件**即themes/next下的_config.yml，找到busuanzi_count，改为true

```yml
busuanzi_count:
  enable: true
  ```
打开`/themes/next/layout/_partials/footer.swig`，在最后添加如下内容：

```swig
{% if theme.busuanzi_count.enable %}
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js">
</script>

    <span id="busuanzi_container_site_pv">总访问量<span id="busuanzi_value_site_pv"></span>次</span>
    <span class="post-meta-divider">|</span>
    <span id="busuanzi_container_site_uv">总访客数<span id="busuanzi_value_site_uv"></span>人</span>
    <span class="post-meta-divider">|</span>
<!-- 不蒜子计数初始值纠正 -->
<script>
$(document).ready(function() {

    var int = setInterval(fixCount, 50);  // 50ms周期检测函数
    var countOffset = 20000;  // 初始化首次数据

    function fixCount() {            
       if (document.getElementById("busuanzi_container_site_pv").style.display != "none")
        {
            $("#busuanzi_value_site_pv").html(parseInt($("#busuanzi_value_site_pv").html()) + countOffset); 
            clearInterval(int);
        }                  
        if ($("#busuanzi_container_site_pv").css("display") != "none")
        {
            $("#busuanzi_value_site_uv").html(parseInt($("#busuanzi_value_site_uv").html()) + countOffset); // 加上初始数据 
            clearInterval(int); // 停止检测
        }  
    }
       	
});
</script> 
{% endif %}
```

### 17. 代码块样式自定义

打开根目录`Blog/source/_data/styles.styl`，添加以下内容：
```css
// Custom styles.
code {
    color: #ff7600;
    background: #fbf7f8;
    margin: 2px;
}
// 大代码块的自定义样式
.highlight, pre {
    margin: 5px 0;
    padding: 5px;
    border-radius: 3px;
}
.highlight, code, pre {
    border: 1px solid #d6d6d6;
}
```

### 18. 本地搜索

打开cmd安装插件：

```Bash
npm install hexo-generator-search
```
查找主题配置文件`themes/next/_config.yml`中的local_search
```yml
local_search:
  enable: true
  trigger: manual   #手动，按回车键或搜索按钮触发搜索
  ```
  
### 19.博文置顶
#### (1) 安装插件
在根目录Blog打开Git Bash，执行下面的命令：
```Bash
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```
#### （2）设置置顶标志
打开`blog/themes/next/layout/_macro`目录下的post.swig文件，定位到`<div class="post-meta">`标签下，插入如下代码：  
```swig
{% if post.top %}
  <i class="fa fa-thumb-tack"></i>
  <font color=7D26CD>置顶</font>
  <span class="post-meta-divider">|</span>
{% endif %}
```
#### （3）在文章中添加top
然后在需要置顶的文章的Front-matter中加上top: true即可，如下：
```md
  ---
  title: Hello World

  top: true

  ---
  ```