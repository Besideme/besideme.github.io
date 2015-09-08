---
layout: post
title:  Python Log
date:   2015-09-01 09:35:50
categories: thought
---

### 注释


- Python中的字符以` # `开始表示注释，例如：  


		# this is the first comment  
		SAMP = 1           # this is the second comment
		STRING = "# this is not a comment."

### 简单的Python命令-数字 

   
- `( )`用于分组，例如` 3 * (6 - 5) `  
- `/`取决于操作数类型，两个` int `型返回` int `型，若有` float `返回` float `  
- `//`用于求商，` % `用于求余  
- `**`计算幂乘方，例如` 2 ** 3 ` 表示2的3次方  
- `=`用于给变量赋值，变量使用前必须“定义”（赋值）  
- 除了` int `和` float `，Python还支持` Decimal `and` Fraction `  
- 交互模式中，最近一个表达式的值赋给` _ `，这样可以很方便地连续运算，例如  

	    >>> tax = 12.5 / 100
		>>> price = 100.50
		>>> price * tax
		12.5625
		>>> round(_, 2)
		12.56   


### 简单的Python命令-字符串


	>>> s = 'First line.\nSecond line.'  # \n means newline
	>>> s  # without print, \n is included in the output
	'First line.\nSecond line.'
	>>> print s  # with print, \n produces a new line
	First line.
	Second line.  

` \ `特殊

