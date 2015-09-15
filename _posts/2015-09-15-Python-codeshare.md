---
layout: post
title:  "牛客网编程分享"
date:   2015-09-15 22:37:50
categories: jekyll update
---

编写一个函数，输入为一个矩阵，打印这个矩阵转置后的结果。

{% highlight python %}
class MatrixRoll:
	"""docstring for matrix"""
	def matrixRoll(self, E):
		matrix1 = [[row[i] for row in E] for i in range(len(E[0]))]
		for j in range(len(matrix1)):
			matrix1[j].reverse()
		print matrix1
{% endhighlight %}

测试 ：  

{% highlight python %}
x = MatrixRoll()
x.matrixRoll(([1,2,3,4],[65,7,8,9]))
[[65,1],[7,2],[8,3],[9,4]]
{% endhighlight %}

给定一个字符串，设计一个算法消除其中成对的括号，如果括号不成对，提示异常（error）
如（1，（2,3），（4，（5,6），7））转化为1,2,3,4,5,6,7
如（1，）2,3），（4，（5,6（，7））提示error。

{% highlight python %}
class RemoveBrackets:
	"""docstring for RemoveBrackets"""
	def removeBrackets(self, mystr):
		mystr1 = []
		for m in xrange(len(mystr)):
			mystr1.append(mystr[m])
		mystr2 = []
		for i in xrange(len(mystr1)):
			mystr2.append(mystr1[i])
			a = mystr2.count('(')
			b = mystr2.count(')')
			if a < b:
				print 'error'
				break
		else:
			c = mystr1.count('(')
			d = mystr1.count(')')
			if c != d:
				print 'error'
			else:
				for j in xrange(c):
					mystr1.remove('(')
					mystr1.remove(')')
				str1 = ''
				str1 = str1.join(mystr1)
				print str1
{% endhighlight %}

测试 ：  

{% highlight python %}
y = RemoveBrackets()
y.removeBrackets('(1,((34,5))')
error
{% endhighlight %}

对于一个字符串，请设计一个高效算法，找到第一次重复出现的字符。
给定一个字符串(不一定全为字母)A及它的长度n。请返回第一个重复出现的字符。保证字符串中有重复字符，字符串的长度小于等于500。  

测试样例：
"qywyer23tdd",11
返回：y

{% highlight python %}
class FirstRepeat:
    def findFirstRepeat(self, A, n):
    # write code here
        lis = []
        for i in range(n):
            lis.append(A[i])            
            if lis.count(lis[i]) > 1:
                return lis[i]
                # 供查看结果用 print lis[i]
                # break
{% endhighlight %}

测试 ：  

{% highlight python %}
x = FirstRepeat()
x.findFirstRepeat("qywyer23tdd",11)
y
{% endhighlight %}
