---
layout: post
title: 创建自己的第一篇博客
date:   2014-12-06 16:05:50
categories: thought
--- 

### 新建 **post**

将 `besideme.github.io` 文件夹拖到 Sublime 中打开
在 posts 文件夹下新建 file ，开头加如下代码：

{% highlight Ruby %}
---
layout: post
title:  My first test
date:   2015-09-01 09:35:50
categories: thought
--- 
{% endhighlight %}

Ctrl + S 保存，文件名格式： 

    2014-12-06-My-First-Post.md

### 设置 **Git Bash** 起始路径

设置环境变量：     
右键 Git Bash -> 属性 起始位置设为 `%GITHOME%` 

计算机右键->属性->高级->环境变量->新建系统变量  
变量名自己定，如 `GITHOME`  ；值为路径，如： `F：/ github`     

根据我们刚才的设置，打开 Git Bash 后起始位置就是刚才的博客所在位置
F：/ github 


### **Git** 基本命令

{% highlight python %}
ls   # 显示 github 文件夹下所有的子文件
cd   # 跟踪 github 文件夹下的子文件   
cd .   # 当前目录 
cd ..   # 返回上一级目录 
git status   # 反映博客更新状态

# 上传博客的三条语句
git add .  
git commit -m "自己的注释" 
git push -u origin master 

jekyll server   # 本地测试
Ctrl + C   # 停止本地测试

# 删除文件
git rm 2014-12-06-My-First-Post.md 
# 删除文件夹
git rm -rf 文件夹名

# 下载库到本地
git clone git@github.com:Besideme/besideme.github.io.git  
{% endhighlight %}
