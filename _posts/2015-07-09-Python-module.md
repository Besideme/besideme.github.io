---
layout: post
title:  "Python 模块"
date:   2015-07-09 11:00:50
categories: jekyll update
---

### 解释器模块搜索路径

输入脚本的目录  
环境变量 PYTHONPATH 表示的目录列表  
Python 默认安装路径  

### 修改解释器模块搜索路径

{% highlight python %}
import sys
# 将搜索路径改为 模块 .py 所在地，例如我将自己写的模块 fibo.py 放在 E:/PythonDemo
sys.path.append('/E:/PythonDemo') 
# 调用
import fibo  # 也可以只调用模块中的部分定义，如 from fibo import fib
fibo.fib(3)
{% endhighlight %}

`fibo.py` 编译成功就会自动生成 `fibo.pyc` 。`fibo.pyc` 文件的内容是平台独立的，所以 Python 模块目录可以在不同架构的机器之间共享。

### dir() 函数

内置函数 dir() 用于按模块名搜索模块定义，它返回一个排好序的字符串类型的存储列表

{% highlight python %}
dir(fibo)
['__builtins__', '__doc__', '__file__', '__name__','fib']
# 无参数调用时，dir() 函数返回当前定义的命名列表
# dir() 不会列出内置函数和变量名。如果想列出这些内容，在标准模块 __builtin__ 中定义
import __builtin__  # 注意左右两个下划线
dir(__builtin__)
{% endhighlight %}

