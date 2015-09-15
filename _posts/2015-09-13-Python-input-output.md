---
layout: post
title:  "Python 输入输出"
date:   2015-09-13 14:00:50
categories: jekyll update
---
### 格式化输出

`str() / repr()` 可以将任意值转化为字符串，`str()` 用于将值转化为使用读者阅读的形式，`repr()`转化为供阅读器阅读的形式。

`str.rjust()` 把字符串输出到一列，并通过向左侧填充空格来使其右对齐  
`str.ljust()` 左对齐   
`str.center()`中间对齐  

{% highlight python %}
# 输出平方 立方
for x in range(1,11):
    print repr(x).rjust(2),repr(x**2).rjust(3),repr(x**3).rjust(5)
...
{% endhighlight %}

`str.zfill()` 向数值的字符串表达式左侧填 0 ，该函数可以正确理解正负号。

{% highlight python %}
'12'.zfill(5)
'00012'
{% endhighlight %}

`str.format()` 可以用参数名来引用值，定位和关键字参数可以组合使用。

{% highlight python %}
# 输出平方 立方
# 对于字符串，输出为 print '{0:2} {1:3}'.format(n,p)
# {0:.3f} 保留三位小数的输出格式
for x in range(1,11):
    print '{0:2d} {1:3d} {2:5d}'.format(x,x**2,x**3)  
...
# 注意 non-keyword  after keyword
print '{0} is {num}'.format('a',num=4)
a is 4
{% endhighlight %}

### 输入

{% highlight python %}
>>> s,l = raw_input(),raw_input()
3
3
s
'3'  # 因此 raw_input 为字符串形式输入, int（s）转为整型
>>> s = raw_input('--> ')
--> Monty Python's Flying Circus
>>> s
"Monty Python's Flying Circus"
{%endhighlight%}

### 文件读写

{% highlight python %}
# 文件打开方式有 w 只写 ,r 只读, r+ 读写。默认为 r
f = open('filename','w')
# 读取文件内容
# size 是可选的数值，指定要读取的字符串长度。若为空，则读取整个文件。
# 如果到了文件末尾，f.read() 返回一个空字符串。
f.read(size)
# 读取一行或多行
f.readline()
f.readlines()
# 写入文件，并返回写入的字符串长度。
# 写入其他非字符串内容，要先用 str() 将其转换为字符串。
f.write(string)
# 关闭
f.close()
{% endhighlight %}