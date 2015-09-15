---
layout: post
title:  "Python 函数式编程工具"
date:   2015-06-12 19:35:50
categories: jekyll update
---

### filter(function,sequence)

`filter(function,sequence)` 返回一个序列（sequence），包括了给定序列中所有调用function(item in sequence) 后返回值为 true 的元素。

{% highlight python %}
# f(x) 判断 int 是否为 3 or 5 的倍数，若是，返回 True ，不是，返回 False
def f(x):return x % 3 == 0 or x % 5 == 0  
...
filter(f,range(2,10))
[3,5,6,9]
# 不同点在于 f(x) 只能作用于单个 item ，此种方式可以作用于 list
map(f,range(2,10))
[False,True,False,True,True,False,False,True]
{% endhighlight %}

### map(function,sequence)

`map(function,sequence)` 为每一个元素调用 function(item) 并将返回值组成一个链表返回。

{% highlight python %}
def cube(x):return x**3
...
map(cube,range(1,3))
[1,4]
{% endhighlight %}

{% highlight python %}
seq = range(1,3)
def add(x,y): return x + y
...
map(add,seq,seq)
[2,4]
# 可以传入多个序列，执行时会依次用各序列上对应的元素来调用函数
# 序列长度必须一致 Error: NoneType and int
# map(add,(1,3),(4,5)) or map(add,[1,3],[4,5])
map(add,range(1,3),range(3,5))  
[4,6]
{% endhighlight %}

### reduce(function,sequence)

`reduce(function,sequence)` 返回一个单值，首先以序列的前两个元素调用函数，再以返回值和第三个参数调用，一次执行。

{% highlight python %}
def add(x,y): return x + y
...
reduce(add,range(1,11))
55
{% endhighlight %}