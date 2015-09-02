---
layout: post
title:  My first test
date:   2015-09-01 09:35:50
categories: thought
---


## ASP.NET中  `Ctrl + K Ctrl + D` 格式化代码

2、Input元素  
要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以

        <input name="firstNumber" value="10"/>
        Button
        <button type="submit"> = </button>

3、div*4>ul>li*3         >表示下一级
  div+.btn*2        加号表示并列 
  在Sublime中敲 div 然后敲 TAB 即可出现提示 <div></div>

4、Ctrl + N 新建Sublime
  Ctrl + Shift + P 命令
  Ctrl + ] 缩进  
 

5、VS2013 使用 Manage NuGet Packages
   a、Tools -> Extentions and Updates 右上角搜索框输入 NuGet
   b、点击 NuGetPackage Manager 项上面的 Install 按钮开始下载NuGet 
   c、重启VS2013 Tools -> NuGet package Manager -> Manage NuGet Packages for Solution 搜索jQuery Install 选择要将jQuery添加到的项目，则该项目中会创建一个Scripts文件夹，其中包含jQuery文件。

 6、在Web.config中注册控件
 
 
       <?xml version="1.0" encoding="utf-8"?>
      <!--
        For more information on how to configure your ASP.NET application, please visit
        http://go.microsoft.com/fwlink/?LinkId=169433
        -->
      <configuration>
        <system.web>
          <compilation debug="true" targetFramework="4.5" />
          <httpRuntime targetFramework="4.5" />
          
          <pages>
            <controls>
              <add tagPrefix="CC" tagName="Calc" src="~/Custom/BasicCalc.ascx"/>
            </controls>
          </pages>
          
        </system.web>
      </configuration>


7、修改VS2013 背景 字体
  Tools -> Options -> Fonts and Colors   ,change Item foreground and Item background 改变字体颜色和面板颜色， chage Size 改变字体大小

8、VS2013 comment on the selected lines 
  Ctrl + K Ctrl + C     <%--  --%>
  save all   Ctrl + Shift + S

9、首先 将blog文件夹拖到Sublime 中打开
  然后   在posts文件夹下新建file 开头加
      ---
      layout: post
      title:  My first test
      date:   2015-09-01 09:35:50
      categories: thought
      --- 
  然后 保存
  然后 打开 Git Bash  第一步  设置环境变量   右键 Git Bash 属性 起始位置 %GITHOME% 
                                计算机右键 属性 高级 环境变量   新建系统变量 变量名自己定GITHOME  值为路径 
                       第二步  根据我们刚才的设置，打开Git Bash 后起始位置就是刚才的博客所在位置   F：/ github 

                         输入命令前首先 Ctrl + C
                       第三步  ls 命令意思是显示github文件夹下所有的子文件  
                                cd 命令意思是跟踪 github文件夹下的子文件 
                                cd be TAB 自动调出 cd besideme.github.io文件夹 
                                  cd . 当前目录 
                                  cd .. 返回上一级目录 
                                  git status 反映博客更新状态 
                                  git add . 增加  
                                  git commit -m "自己的注释" 
                                  git push -u origin master 
                                  jekyll server 本地测试  

![hua](/image/1.jpg)               
`![hua](/image/1.jpg)`  这条语句用来加图片    `` 也就是~~ 用来显示代码   


![Alt text](/image/1.jpg "图片说明")  

Ctrl + / + \ 注释 

俩空格换行  
修改 _config.yml  可以修改博客显示信息  

参照about 导航  
新建 asp.md  
头 类似于about修改  
  ---
  layout: page
  title: ASP
  permalink: /bgbygygby/
  ---
保存 即可  

## 如何添加读书列表链接  
新建 index.md   浏览器默认第一访问的文件  
index源码  

    ---
    layout: page
    title: Books
    ---

    <div id="douban"></div>

    <script src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="/js/douban.api.js"></script>
    <script type="text/javascript"> 
    var dbapi = new DoubanApi(); window.onload = book; function book(){ dbapi.show(); } 
    </script>

此处图书使用的是豆瓣API  
申请豆瓣API账号 [http://developers.douban.com/wiki/?title=connect](http://developers.douban.com/wiki/?title=connect)   
使用说明[http://developers.douban.com/wiki/?title=tutorial](http://developers.douban.com/wiki/?title=tutorial)  
使用说明[http://developers.douban.com/wiki/?title=tutorial](http://developers.douban.com/wiki/?title=tutorial "在此处添加了关于这个网页的说明")
  
回调地址为博客地址   [http://besideme.github.io](http://besideme.github.io)  
如何将网页设置为链接  注意 此处需要换行   链接文字都是用 [方括号] 来标记。 网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。  

    [http://besideme.github.io](http://besideme.github.io)  

Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用方括号包起来， Markdown 就会自动把它转成链接。例如 `<http://besideme.github.io>` <http://besideme.github.io>  <leichaomin@126.com>


## sublime markdown没有高亮显示   
 
 安装Markdown​Editing插件时报错，将打开的.md文件全部关闭 再打开sublime is ok
    Error loading syntax file
    "Package/Markdown/Markdown.tmLanguage": Unable to open Package/Markdown/Markdown.tmLanguage



## Markdown基本语法

### 标题设置  

* 类 Atx 形式  

在文字开头加上 “#”，通过“#”数量表示几级标题。标题后要换行。（一共只有1~6级标题，1级标题字体最大）

### 区块引用  

空一行 然后>加空格   引用  然后再空一行  停止  
区块引用可以嵌套  

> 窗前明月光  
>       
> > 疑是地上霜  

引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等


### 斜体、粗体    

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号  
例如普通的星号 \*  
将需要设置为斜体的文字两端使用1个`*`或者`_`夹起来，比如*斜体*     
将需要设置为粗体的文字两端使用2个`*`或者`_`夹起来，比如**粗体**

### 列表  

1. 在文字开头添加(`*`, `+`, and `-`)实现无序列表。但是要注意在(`*`, `+`, and `-`)和文字之间需要添加空格。（建议：一个文档中只是用一种无序列表的表示方式）列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用 <p> 标签包起来。  
例如：

    * 第一  
    * 第二  
    * 第三  
    + 第一  

2. 使用数字后面跟上英文句号。和空格，实现有序列表  
在列表标记上使用的数字并不会影响输出的 HTML 结果 
> 床前明月光

> 床前明月光  此处为引用   

空一行 然后>加空格   引用  然后再空一行  停止  


