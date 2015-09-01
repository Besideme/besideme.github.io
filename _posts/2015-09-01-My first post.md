---
layout: post
title:  My first test
date:   2015-09-01 09:35:50
categories: thought
---


1、ASP.NET中  Ctrl + K Ctrl + D 格式化代码

2、Input元素
	<input name="firstNumber" value="10"/>
	Button
	<button type="submit"> = </button>

3、div*4>ul>li*3         >表示下一级
	div+.btn*2 				加号表示并列 
	在Sublime中敲 div 然后敲 TAB 即可出现提示 <div></div>

4、Ctrl + N 新建Sublime
	Ctrl + Shift + P 命令

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

8、comment on the selected lines 
	Ctrl + K Ctrl + C     <%--  --%>
	save all   Ctrl + Shift + S

