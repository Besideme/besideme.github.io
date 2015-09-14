---
layout: post
title:  Python Log
date:   2015-09-08 09:35:50
categories: thought
---
### 注释

- Python中的字符以 `#` 开始表示注释，例如：  

{% highlight python %}
# this is the first comment  
SAMP = 1           # this is the second comment
STRING = "# this is not a comment."
{% endhighlight %}

### 简单的Python命令-数字 
   
- `( )` 用于分组，例如`3 * (6 - 5)`  
- `/` 取决于操作数类型，两个 `int` 型返回 `int` 型，若有 `float` 返回 `float`  
- `//` 用于求商，`%` 用于求余  
- `**` 计算幂乘方，例如 `2 ** 3` 表示2的3次方  
- `=` 用于给变量赋值，变量使用前必须“定义”（赋值）  
- 除了 `int` 和 `float` ，Python 还支持 `Decimal` and `Fraction`  
- 交互模式中，最近一个表达式的值赋给 `_`，这样可以很方便地连续运算，例如  

{% highlight python %}
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> round(_, 2)
12.56   
{% endhighlight %}

### 简单的Python命令-字符串

- 字符串可以用单引号 `''` 或者双引号 `""` 标示， `print` 语句可以生成更好的输出，例如

{% highlight python %}
>>> s = 'First line.\nSecond line.'  # \n means newline
>>> s  # without print, \n is included in the output
'First line.\nSecond line.'
>>> print s  # with print, \n produces a new line
First line.
Second line.
>>>print 's is\n',s 
s is
First line.
Second line. 
{% endhighlight %}

- 特殊字符用 `\` 转义，如果带有 `\` 的字符被当做特殊字符，可以在第一个引号前加 `r` ，例如

{% highlight python %}
>>> print 'C:\some\name'  # here \n means newline!
C:\some
ame
>>> print r'C:\some\name'  # note the r before the quote
C:\some\name
{% endhighlight %}

- 字符串文本能够分成多行，用三引号 `'''...'''` 或者 `"""..."""` 标示，例如

{% highlight python %}
print """      
a
    -h                                      
"""  #必须用print输出
{% endhighlight %}

- 字符串可以由 `+` 连接，用 `*` 表示重复，例如

{% highlight python %}
>>> # 3 times 'un', followed by 'ium'
>>> 3 * 'un' + 'ium'
'unununium'
{% endhighlight %}

- 相邻的两个字符串文本自动连接在一起，如果想连接多个变量或者连接一个变量和字符串文本，使用 `+`

{% highlight python %}
>>>print 3*'a''b'  # print 3*'a','b'  输出为 aaa b
ababab
>>>s='a'
>>>print s + 'bs'
abs
{% endhighlight %}

- 字符串也可以被截取（检索），字符串第一个索引为 0 ；字符串还支持切片，索引用于获得一个字符，切片用于获得一个字符串；字符串不可以被改变，赋值给字符串索引的位置会出错。例如

{% highlight python %}
>>>word='Python'
>>>word[0],word[-1] #last character，从右边开始计算
('P','n')
>>>word[1:3] #characters from 1(include) to 3(exclude)
'yt'
>>>word[4:] + word[:2] #切片省略的第一个索引默认为 0,第二个默认为切片的字符串大小
'onPy'
>>>word[42:] + word[:42] #对于过大的索引值在右边默认为字符串实际长度，在左边返回空字符串
'Python'
{% endhighlight %}

- 内置函数 `len()` 返回字符串的长度，例如

{% highlight python %}
>>>s='ab'
>>>len(s)
2
{% endhighlight %}

### 简单的Python命令-列表

- 列表是中括号之间的一系列逗号分隔的值，列表的元素不必是同一类型

{% highlight python %}
>>>a=[1,'a',3,'b']
{% endhighlight %}

- 列表也可以被索引和切片,列表也支持连接

{% highlight python %}
>>>a[0]
1
>>>a[0:2]
[1,'a']
>>>a[0:2]+[1,3]
[1,'a',1,3]
{% endhighlight %}

- 列表允许修改元素， `len()` 也适用于列表

{% highlight python %}
>>>a[0:2]=['b',2]
>>>print a
['b',2,1,3]
>>>len(a)
{% endhighlight %}

- 使用 `append()` 方法在列表末尾添加新的元素

{%highlight python %}
>>>a.append(2**3)
>>>a
['b',2,1,3,8]
{% endhighlight %}

- 列表允许嵌套

{%highlight python %}
>>>c=[a,'c']
>>>c
[['b',2,1,3,8],'c']
{% endhighlight %}

### Python编程第一步

- 变量可以同时赋值；循环体必须缩进，在最后输入空行标示循环结束，例如

{% highlight python %}
>>> # Fibonacci series:
... # the sum of two elements defines the next
... a, b = 0, 1
>>> while b < 10:
...     print b,   #末尾加逗号可以禁止自动换行
...     a, b = b, a+b
...
1 1 2 3 5 8
{% endhighlight %}	  
