---
layout: post
title:  Python 索引位置和对应值
date:   2015-03-09 00:37:50
categories: note
---

### range() 函数

`range()` 生成数值序列，例如

{% highlight python %}
>>>range(5)   #range(3,5)   [3,4]
[0,1,2,3,4]
>>>range(10,0,-2)   #从 10 开始；-2 为步长，可正可负；0 为结束值，不包含在范围内
[10,8,6,4,2]
{% endhighlight %}

拆开参数列表 `*`

{% highlight python %}
args=[3,6]
range(*args)
[3,4,5]
{% endhighlight %}

索引位置和对应值——`range()` and `len()`

{% highlight python %}
>>>a=['cde' , 'ab']
>>>for i in range(len(a)):
...    print i,a[i]
...
0 cde
1 ab
{%endhighlight %}

索引位置和对应值——`enumerate()`

{% highlight python %}
>>>for i,v in enumerate(a):
...    print i , v
...
0 cde
1 ab
{% endhighlight %}




