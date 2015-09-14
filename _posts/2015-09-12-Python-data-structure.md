---
layout: post
title:  "Python 数据结构"
date:   2015-09-12 19:35:50
categories: jekyll update
---
### 列表

`a.append(x)` 把一个元素添加到列表的结尾，相当于 `a[len(a):]=[x]`  
`a.extend(L)` 将 `L` 列表中的所有元素都添加到 `a` 列表中，相当于 `a[len(a):]=L`   
`a.insert(i,x)` 第 `i` 个位置插入元素 `x`    
`a.remove(x)` 删除链表中值为 `x` 的第一个元素  
`a.pop(i)` 从列表的指定位置删除元素，并将其返回。如果没有指定索引，`a.pop()` 返回最后一个元素并将其在链表中删除。  
`a.index(x)` 返回链表中第一个值为 `x` 的索引  
`a.count(x)` 返回 `x` 在链表中出现的次数  
`a.sort(cmp=None,key=None,reverse=False)` 对链表中的元素就地进行排序  
`sorted(a,key=itemgetter(1,2))/attrgetter('age')/methodcaller('count','a')`
`a.reverse()` 逆序排列

### 链表做堆栈、链表做队列

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

### 函数式编程工具

`filter(function,sequence)` 返回一个序列（sequence），包括了给定序列中所有调用function(item in sequence) 后返回值为 true 的元素。

{% highlight python %}
# f(x) 判断 int 是否为 3 or 5 的倍数，若是，返回 True ，不是，返回 False
def f(x):return x % 3 == 0 or x % 5 == 0  
...
filter(f,range(2,10))
[3,5,6,9]
# 不同点在于 f(x) 只能作用于单个 int ，此种方式可以作用于 list
map(f,range(2,10))
[False,True,False,True,True,False,False,True]
{% endhighlight %}

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

`reduce(function,sequence)` 返回一个单值，首先以序列的前两个元素调用函数，再以返回值和第三个参数调用，一次执行。

{% highlight python %}
def add(x,y): return x + y
...
reduce(add,range(1,11))
55
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

一些列表推导式实例

{% highlight python %}
[(x,y) for x in range(1,3) for y in range(0,7) if x!=y]  # 得到数组
[x for x in range(-3,4) if x>=0]   #取正数
[abs(x) for x in range(-3,2)]   #取绝对值
from math import pi
[str(round(pi,i)) for i in range(1,6)]  # 取 i 位小数
# strip() 函数：a.strip() 删除头或尾的空白字符，\n \r \t &nbsp;
# a.strip('e') 删除头或尾的指定元素
# a.lstrip() 删除头的空白字符，a.lstrip('e') 删除头的指定字符，a 的值未被改变
# a.rstrip() 删除尾的空白字符，a.rstrip('c') 删除尾的指定字符
# 注意此处的 a is item not list
[a.strip() for a in ['e','  c ']]  
{% endhighlight %}

{% highlight python %}
matrix = [[1,2,3,4],[5,6,7,8]]
[[row[i] for row in matrix] for i in range(len(matrix[0]))]  #交换矩阵行和列
{% endhighlight %}


### del语句

del 按给定的索引删除元素，del 还可以从列表中删除切片或清空整个列表  
`del a[0]`  
`del a[2:4]`  
`del a[:]` 

### 元祖和序列

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

### 循环技巧

同时循环两个或更多个序列，可以用 zip() 打包

{% highlight python %} 
alpha,num = ['a','b'],[4,3]
for q,a in zip(alpha,num):
    print '{0} = {1}.'.format(q,a),
...
a = 4 b = 3
{% endhighlight %}

### 比较序列

比较操作按 字典序 进行：首先比较前两个元素，如果不同，就决定了比较的结果；如果相同，就比较后两个元素，依此类推，直到所有序列都完成比较。如果两个元素本身就是同样类型的序列，就递归字典序比较。如果两个序列的所有子项都相等，就认为序列相等。如果一个序列是另一个序列的初始子序列，较短的一个序列就小于另一个。字符串的字典序按照单字符的 ASCII 顺序。