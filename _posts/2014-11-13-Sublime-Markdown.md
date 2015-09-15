---
layout: post
title:  Sublime Markdown 无高亮显示
date:   2014-11-13 20:05:50
categories: Notes
--- 

Sublime Markdown 无高亮显示：安装 **Markdown​Editing** 插件  

Ctrl + Shift + P 打开命令行  
输入 Install  
选择 Install Package
  
  ![Install Package](/image/Install Package.jpg)  

在命令行中输入 Markdown​Editing 点击即可自动安装。  
 
安装完成关闭 Sublime 再打开时若出现报错

{% highlight html %}
Error loading syntax file
"Package/Markdown/Markdown.tmLanguage": 
Unable to open Package/Markdown/Markdown.tmLanguage
{% endhighlight %}

解决方法：将打开的.md文件全部关闭，然后关闭再打开sublime，OK。
