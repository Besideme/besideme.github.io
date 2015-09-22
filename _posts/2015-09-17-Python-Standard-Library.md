---
layout: post
title:  "Python 标准库"
date:   2015-09-17 15:37:50
categories: jekyll update
---

### math()

math 模块为浮点运算提供了对底层 C 函数库的访问

{% highlight python %}
# 求角度的余弦值 -1 ~ 1 math.pi/2  2*math.pi
import math
math.cos(math.pi)
-1
math.log(1024,2)
10.0
{% endhighlight %}

### random()

random 生成随机数

{% highlight python %}
import random
random.choice(['a','b','c'])
'c'
# 不放回抽样，在 range(100) 中随机抽取 10 个数
random.sample(xrange(100),10)
# 随机生成一个浮点数
random.random()
# 在 range(n) 中随机选一个数
random.randrange(6)

{% endhighlight %}
