---
layout: page
title: Books
---

<div id="douban"></div>

<script src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="/js/douban.api.js"></script>
<script type="text/javascript"> 
var dbapi = new DoubanApi(); window.onload = book; function book(){ dbapi.show(); } 
</script>