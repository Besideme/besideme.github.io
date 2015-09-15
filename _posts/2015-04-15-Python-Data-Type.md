---
layout: post
title:  "Python 元祖/序列/集合/字典"
date:   2015-04-15 19:35:50
categories: jekyll update
---

### 元祖

一个元祖由数个逗号分隔的值组成，如： `t=1,3,'a'` ,输出 `(1,3,'a')` 一对空括号可以创建空元祖。

### 集合

集合可以由 `{}` 或者 `set()` 函数创建，`set()` 为空集合。
集合无序，不记录元素位置和插入点。  
集合支持 union, intersection, difference, sysmmetric difference 等数学运算

{% highlight python %}
b = ['a','c','a','b','c'] 
alpha = set(b)
alpha
set(['a','c','b'])	 
'a' in alpha
True
a = set('abc')
a
set(['a','b','c'])
sorted(set(['a',2,'c']))
[2,'a','c']
b = set('cde')
a-b  # letters in a but not in b
set(['a','b'])
a|b  # letters in a or b
set(['a','b','c','d','e'])
a&b  # letters in a and b 
set(['c'])
a^b  # letters in a or b but not both
set(['a','b','d','e'])
{% endhighlight %}

集合推导式

{% highlight python %}
a = {x for x in 'acd' if x not in 'ac'}
a
set['d'] 
{% endhighlight %}

### 字典

字典为值对的集合（key : value），{} 创建空字典

{% highlight python %}
# 关键字都是字符串，可以用 dic = dict(a=2,b=3) 创建字典
# in 关键字可以检查字典中是否存在某个关键字
dic = dict([('a',2),('c',4)])  
dic['b'] = 3  # {'a':2, 'c':4, 'b':3}
del dic['b']  # 字典可以用 del 删除键 {'a':2, 'c':4} 
dic.keys()  # keys() 可以得到所有关键字，若要对关键字排序，用 sorted(dic)
{x : x**2 for x in range(3,6)}  # 字典推导式
# 遍历字典时，使用 iteritems() 方法可以同时得到键和对应的值
for k,v in dic.iteritems():
    print k,v,
...
a 2 c 4
{% endhighlight %}  


### 比较序列

比较操作按 字典序 进行：首先比较前两个元素，如果不同，就决定了比较的结果；如果相同，就比较后两个元素，依此类推，直到所有序列都完成比较。如果两个元素本身就是同样类型的序列，就递归字典序比较。如果两个序列的所有子项都相等，就认为序列相等。如果一个序列是另一个序列的初始子序列，较短的一个序列就小于另一个。字符串的字典序按照单字符的 ASCII 顺序。