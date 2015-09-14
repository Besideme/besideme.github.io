---
layout: post
title:  Github Learning Log
date:   2015-09-06 21:35:50
categories: thought
--- 

### 新建post
将 `besideme.github.io` 文件夹拖到Sublime 中打开
在posts文件夹下新建file，开头加如下代码：

      ---
      layout: post
      title:  My first test
      date:   2015-09-01 09:35:50
      categories: thought
      --- 

保存，文件名格式： 

    2015-09-02-Markdown 基本语法.md

### 设置**Git Bash**起始路径

第一步  设置环境变量   右键 Git Bash 属性 起始位置 `%GITHOME%` 
                                计算机右键->属性->高级->环境变量->新建系统变量 变量名自己定，如`GITHOME`  值为路径，如： `F：/ github` 
                       第二步  根据我们刚才的设置，打开Git Bash 后起始位置就是刚才的博客所在位置   F：/ github 


### **Git**基本命令

 输入命令前首先 Ctrl + C
 第三步  ls 命令意思是显示github文件夹下所有的子文件  
          cd 命令意思是跟踪 github文件夹下的子文件 
          cd be TAB 自动调出 cd besideme.github.io文件夹 
            cd . 当前目录 
            cd .. 返回上一级目录 
            git status 反映博客更新状态 
            git add . 增加  
            git commit -m "自己的注释" 
            git push -u origin master 
            jekyll server 本地测试
            git reset HEAD 修改题目
            git checkout  修改 2015-09-06 题目

            删除文件
 git rm 文件名(asp.md)

删除文件夹
git rm -rf 文件夹名  

<https://github.com/Besideme/besideme.github.io/tree/master>  

下载库命令:
git clone git@github.com:Besideme/besideme.github.io.git 

### 博客主页显示信息

 修改_config.yml    

### 导航  
参照about 新建 asp.md  
头 类似于about修改  
  ---
  layout: page
  title: ASP
  permalink: /bgbygygby/
  ---
保存 即可  

### 添加读书列表链接  
新建 index.md   浏览器默认第一访问的文件  
index源码  

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

此处图书使用的是豆瓣API  
申请豆瓣API账号 [http://developers.douban.com/wiki/?title=connect](http://developers.douban.com/wiki/?title=connect)   
使用说明[http://developers.douban.com/wiki/?title=tutorial](http://developers.douban.com/wiki/?title=tutorial)  
使用说明[http://developers.douban.com/wiki/?title=tutorial](http://developers.douban.com/wiki/?title=tutorial "在此处添加了关于这个网页的说明")
  
回调地址为博客地址   [http://besideme.github.io](http://besideme.github.io)  
如何将网页设置为链接  注意 此处需要换行   链接文字都是用 [方括号] 来标记。 网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。  

    [http://besideme.github.io](http://besideme.github.io)  

<https://ruby-china.org/topics/14005> Ruby字体大全


 


body{
  background-color: rgba(251, 244, 248, 0.81) !important;
}  
!important用来改变样式优先级



inurl: github.io
- jekyll template
- blog template