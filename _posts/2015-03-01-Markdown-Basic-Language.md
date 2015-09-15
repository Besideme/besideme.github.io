---
layout: post
title:  Markdown 基本语法
date:   2015-03-01 12:05:50
categories: Notes
---   

### 标题设置
  
在文字开头加上 `#` ，通过 `#` 数量表示几级标题。  

{% highlight html%}  
### 这是文章的标题
{% endhighlight %}

在标题前或标题后换行。共有1~6级标题，1级标题字体最大。

### 区块引用

用 `>` 表示区块引用，引用可以嵌套。末尾空一行，则引用停止。
引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等

	> 窗前明月光  
	>       
	> > 疑是地上霜  
   
> 窗前明月光  
>       
> > 疑是地上霜  

### 斜体、粗体 

将需要设置为斜体的文字两端使用 1 个 `*` 或者 `_` 夹起来，比如`*斜体*` *斜体*       
将需要设置为粗体的文字两端使用 2 个 `*` 或者 `_` 夹起来，比如`**粗体**` **粗体**   
Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，
例如普通的星号 `\*`  \*  

### 列表 

在文字开头添加( `*` ,  `+` , 或者 `-` )实现无序列表。注意在( `*` , `+` , and  `-` )和文字之间需要添加空格。  
使用数字后加英文句号 `1. ` 和空格，实现有序列表。    
在列表标记上使用的数字不会影响输出的 HTML 结果。   
  
例如：

	- 第一  
	- 第二  
		
* 第一  
* 第二  
  


### 链接

链接文字用 [方括号] 来标记。     
网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。    

	[http://besideme.github.io](http://besideme.github.io)
	[http://besideme.github.io](http://besideme.github.io "点击可进入我的博客") 

[http://besideme.github.io](http://besideme.github.io)  
[http://besideme.github.io](http://besideme.github.io "点击可进入我的博客")   添加了网址定义

Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用 `<>` 包起来， Markdown 就会自动把它转成链接。例如

	<http://besideme.github.io>     
	
<http://besideme.github.io>   

### 代码区块

缩进 4 个空格或是 1 个制表符就可以在 Markdown 中建立代码区块。`Ctrl + ]` 缩进。    

	  <input name="firstNumber" value="10"/>
	  <button type="submit"> = </button>  

使用 1 个 \` 夹起来显示代码，例如\`code\` `code`   
使用 `{ % highlight ruby % } code... { % endhighlight % }`显示不同类型的代码，注意 `{` 和 `%` 之间其中不能加空格。

{% highlight python %}
# 这是一段 Python 代码
>>>a,b = 0,1
>>>def add(x,y):return x + y
...
>>>add(a,b)
1  
{% endhighlight %}

### 插入图片
               
`![图片提示](/图片路径/1.jpg) 或![Alt text](/image/1.jpg "图片说明") `  

### 换行

文字后 2 个空格，然后敲 Enter 换行。

### 表格

	| Header One     | Header Two     |
	| :------------- | :------------- |
	| Item One       | Item Two       |
	| My table|My table|


`| :------------- | :------------- | `，`| :-------------: | :-------------: |`，`| -------------: | -------------: |` 分别表示文字居左、居中和居右。

上述表格在Atom中显示为：

  ![表格](/image/Tabletest.jpg "表格样式")


  


 


        