---
layout: post
title:  "Python list"
date:   2015-04-12 19:35:50
categories: jekyll update
---
### 列表函数

{% highlight python %}
# 把一个元素添加到列表的结尾，相当于 list[len(list):]=[x] 
list.listppend(x) 
# 将 L 列表中的所有元素都添加到 list 列表中，相当于 list[len(list):]=L
list.extend(L) 
# 第 i 个位置插入元素 x   
list.insert(i,x) 
{% endhighlight %}

{% highlight python %} 
# 删除列表中值为 x 的第一个元素 
list.remove(x) 
# 从列表的指定位置删除元素，并将其返回 
list.pop(i) 
# 返回最后一个元素并将其在列表中删除
list.pop()
# 按给定的索引删除元素
del list[0]
# 从列表中删除切片或清空整个列表
del list[2:4]  
del list[:]
{% endhighlight %}

{% highlight python %}
# 返回列表中第一个值为 x 的索引 
list.index(x) 
# 返回 x 在列表中出现的次数   
list.count(x)  
# 列表排序
list.sort(cmp=None,key=None,reverse=False)
sorted(list,key=itemgetter((1,2))/attrgetter('age')/methodcaller('count','a')
# 列表逆序排列
list.reverse()
{% endhighlight %}

想要了解更多关于列表排序请访问   
<http://besideme.github.io/note/2015/09/14/python-sort.html>

### 列表做堆栈、列表做队列

`append()` 可以将元素添加添加到堆栈顶，`pop()` 方法可以把一个元素从堆栈顶释放出来。  
实现队列使用 `collections.deque`

{% highlight python %}
from collections import deque
queue = deque(['a','b','d'])
queue.append('f')
queue.popleft()
'a'
queue
deque(['b','d','f'])
{% endhighlight %}

### 列表推导式

{% highlight python %}
squares = [x ** 2 for x in range(1,5)]
{% endhighlight %}

相当于

{% highlight python %}
squares=[]
for x in range(1,4)
	squares.append = [x**2]
{% endhighlight %}

矩阵的列表推导式

{% highlight python %}
matrix = [[1,2,3,4],[5,6,7,8]]
[[row[i] for row in matrix] for i in range(len(matrix[0]))]  #交换矩阵行和列
{% endhighlight %}

一些列表推导式实例

{% highlight python %}
[(x,y) for x in range(1,3) for y in range(0,7) if x!=y]  # 得到数组
[x for x in range(-3,4) if x>=0]   #取正数
[abs(x) for x in range(-3,2)]   #取绝对值
from math import pi
[str(round(pi,i)) for i in range(1,6)]  # 取 i 位小数
[a.strip() for a in ['e','  c ']]  
{% endhighlight %}

strip() 函数：  
strip() 作用于 item  
a.strip() 删除头或尾的空白字符，`\n \r \t &nbsp;`   
a.strip('e') 删除头或尾的指定元素  
a.lstrip() 删除头的空白字符，a.lstrip('e') 删除头的指定字符，a 的值未被改变  
a.rstrip() 删除尾的空白字符，a.rstrip('c') 删除尾的指定字符  
