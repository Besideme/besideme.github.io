---
layout: post
title:  My first test
date:   2015-09-01 09:35:50
categories: thought
---


1、ASP.NET中  `Ctrl + K Ctrl + D` 格式化代码

2、Input元素

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
 
 ```
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
```

7、修改VS2013 背景 字体
  Tools -> Options -> Fonts and Colors   ,change Item foreground and Item background 改变字体颜色和面板颜色， chage Size 改变字体大小

8、comment on the selected lines 
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
                                计算机右键 属性 高级 环境变量   新建系统变量 变量名自己定GITHOME 值为路径
                       第二步  根据我们刚才的设置，打开Git Bash 后起始位置就是刚才的博客所在位置 F：/ github 
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


