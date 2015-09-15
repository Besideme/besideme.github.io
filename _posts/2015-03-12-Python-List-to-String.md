---
layout: post
title:  "Python list <--> string"
date:   2015-03-12 19:35:50
categories: jekyll update
---

### string 转 list

函数 list()  

{% highlight python %}
str = 'ade'
list = list(str)
list
['a','d','e']
{% endhighlight %}

### list 转 string

函数 str.join()

{% highlight python %}
str1 = ''
str1 = str1.join(list)
print str1
d00
{% endhighlight %}

如果列表中含有非字符，则要先将之转化为字符

{% highlight python %}
list = ['d',0,3]
for i in range(len(list)):
    list[i] = str(list[i])
print list
['d','0','0']

str1 = ''
str1 = str1.join(list)
{% endhighlight %}