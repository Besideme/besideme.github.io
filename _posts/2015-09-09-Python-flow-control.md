---
layout: post
title:  Python 流程控制
date:   2015-09-09 14:37:50
categories: note
---
### if 语句


`if...elif...elif` 用于替代其他语言中的 `switch` 或 `case` 语句，例如

{%highlight python %}
>>>x=int(raw_input("please enter an integer: "))
please enter an integer: 1
>>>if x<0:
	  x=0
	  print 'Negative changed to zero'
   elif x=0:
 	  print 'zero'
   else:
    print 'more'
...
more
{%endhighlight %}	

### for 语句


`for` 语句依据任意序列中（链表或字符串）的子项，按他们在序列中的位置进行迭代。文字不太好理解，直接看例子：  

{% highlight python %}
>>>words = ['cat' ,'code' ]
>>>for w in words:
	   print w,len(w)
...
cat 3
code 4
{% endhighlight %}

在迭代过程中修改迭代序列不安全(只有在使用链表这样的可变序列时才会有这样的情况)。如果想要修改迭代的序列(例如：复制选择项)，可以迭代它的复本。使用切割标识就可以很方便地做到这一点。直接看代码更了然：

{% highlight python %}
>>>for w in words[:]:  #Loop over a slice copy of the entire list.
...    if len(w) > 3:
...       word.insert(0,w)
...
>>>word
['code' , 'cat' , 'code']
{% endhighlight %}

### range() 函数


`range()` 生成数值序列，例如

{% highlight python %}
>>>range(5)   #range(3,5)   [3,4]
[0,1,2,3,4]
>>>range(10,0,-2)   #从 10 开始；-2 为步长，可正可负；0 为结束值，不包含在范围内
[10,8,6,4,2]
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


### break/continue/循环语句中的else


`break` 用于跳出最近一级的 `for` 或 `while` 。  
循环可以有一个 `else` 子句，在未出现 `break` 时运行。

{% highlight python %}
for n in range(2,10):
	for x in range(2,n):
		if n%x==0:
			print n,'equals',x,'*',n/x
			break
	else:
	print n,'is a prime number'
...
{% endhighlight %}

`continue` 表示循环继续执行下一次迭代

{% highlight python %}
for n in range(2,10):
	if n%2==0:
		print 'found an even number',n
		continue   #若此处不加continue则执行下一个print语句，然后循环
	print 'found a number',n
{% endhighlight %}


### 函数定义

关键字 def 引入函数定义  
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


拆开参数列表 `*`

{% highlight python %}
args=[3,6]
range(*args)
[3,4,5]
{% endhighlight %}