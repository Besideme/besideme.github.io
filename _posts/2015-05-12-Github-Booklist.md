---
layout: post
title:  给自己的博客添加豆瓣读书列表吧！
date:   2015-05-12 21:35:50
categories: thought
--- 

### 申请豆瓣 API 

首先，你要有自己的豆瓣账号。其次，申请一个豆瓣 API。  

申请豆瓣 API 账号 [http://developers.douban.com/wiki/?title=connect](http://developers.douban.com/wiki/?title=connect)  

豆瓣 API 使用说明 [http://developers.douban.com/wiki/?title=tutorial](http://developers.douban.com/wiki/?title=tutorial) 

回调地址为你的博客地址 [http://besideme.github.io](http://besideme.github.io) 

### 添加 js

在 js 文件夹下新建 douban.api.js  

douban.api.js 代码链接：<http://pan.baidu.com/s/1c0FdcyO>

更改 API 账户为你自己的

    user: "133568394",
    api: "0d6ccfaf50b5870228466f0df2209506",

### 添加 Books

新建 Mybooks -> books.md    
books.md 源码  

{% highlight Ruby %}
---
layout: page
title: Books
permalink: /books/
---

<div id="douban"></div>
<script src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/douban.api.js"></script>
<script type="text/javascript"> 
var dbapi = new DoubanApi(); window.onload = book; function book(){ dbapi.show(); } 
</script>
{% endhighlight %}

