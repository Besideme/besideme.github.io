---
layout: post
title:  Python 定义函数
date:   2015-02-25 16:22:50
categories: thought
---

关键字 `def` 引入函数定义  
函数体语句必须缩进

{% highlight python %}
# 返回一个包含 Fibonacci Series数列的数值链表
def function(n):
	result = []
	a,b=0,1
	while a<n:
		result.append(a)
		a,b = b,a+b
	return result
...
print function(20)
{% endhighlight %}

可以定义包含若干参数的函数，调用时参数可选，第一个为必选参数  
all keyword arguments（a='cd'）/all positional arguments('cd')/positional +keyword是有效的，其他是无效的
(注意Ture/False/None等首字母要大写)

{% highlight python %}
def ask_ok(prompt, retries=4, complaint='Yes or no, please!'):
    while True:
        ok = raw_input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            # raise 语句允许程序员强制抛出一个指定的异常。
            raise IOError('refusenik user') 
        print complaint
{% endhighlight %}


默认值只被赋值一次。下面的函数在调用过程中会积累传给它的参数。

{% highlight python %}
def f(a,L=[]):
	L.append(a)
	return L
...
print f(1)
print f(2)
[1]
[1,2]
{% endhighlight %}

如果不想在随后的调用中共享默认值，可以将函数改为

{% highlight python %}
def f(a,L=None):
	if L is None:
		L = []
	L.append(a)
	return L
...
{% endhighlight %}
