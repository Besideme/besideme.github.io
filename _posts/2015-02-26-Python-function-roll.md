---
layout: post
title:  Python 循环语句
date:   2015-02-26 10:47:50
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

### break/continue 循环语句中的 else

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

### 循环技巧

同时循环两个或更多个序列，可以用 zip() 打包

{% highlight python %} 
alpha,num = ['a','b'],[4,3]
for q,a in zip(alpha,num):
    print '{0} = {1}.'.format(q,a),
...
a = 4 b = 3
{% endhighlight %}