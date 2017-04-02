#AngularJS 简介
	AngularJS 是一个 JavaScript 框架。它可通过 <script> 标签添加到 HTML 页面。
	AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。
	
 - ng-app 指令定义一个 AngularJS 应用程序。
 - ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
 - ng-bind 指令把应用程序数据绑定到 HTML 视图。

#什么是 AngularJS？
	AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。
	AngularJS 把应用程序数据绑定到 HTML 元素。
	AngularJS 可以克隆和重复 HTML 元素。
	AngularJS 可以隐藏和显示 HTML 元素。
	AngularJS 可以在 HTML 元素"背后"添加代码。
	AngularJS 支持输入验证。

	HTML5 允许扩展的（自制的）属性，以 data- 开头。
	AngularJS 属性以 ng- 开头，但是您可以使用 data-ng- 来让网页对 HTML5 有效。

#AngularJS 表达式
	AngularJS 表达式写在双大括号内：{{ expression }}。
	AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。
	AngularJS 将在表达式书写的位置"输出"数据。
	AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。
	实例 {{ 5 + 5 }} 或 {{ firstName + " " + lastName }}

#AngularJS 应用
	AngularJS 模块（Module） 定义了 AngularJS 应用。
	AngularJS 控制器（Controller） 用于控制 AngularJS 应用。
	ng-app指令定义了应用, ng-controller 定义了控制器。

#AngularJS 表达式 与 JavaScript 表达式

	类似于 JavaScript 表达式，AngularJS 表达式可以包含字母，操作符，变量。
	与 JavaScript 表达式不同，AngularJS 表达式可以写在 HTML 中。
	与 JavaScript 表达式不同，AngularJS 表达式不支持条件判断，循环及异常。
	与 JavaScript 表达式不同，AngularJS 表达式支持过滤器。

#AngularJS 指令
	AngularJS 指令是扩展的 HTML 属性，带有前缀 ng-。
	ng-app 指令初始化一个 AngularJS 应用程序。
	ng-init 指令初始化应用程序数据。
	ng-model 指令把元素值（比如输入域的值）绑定到应用程序。

#数据绑定

	上面实例中的 {{ firstName }} 表达式是一个 AngularJS 数据绑定表达式。
	AngularJS 中的数据绑定，同步了 AngularJS 表达式与 AngularJS 数据。
	{{ firstName }} 是通过 ng-model="firstName" 进行同步。

 - ng-repeat 指令会重复一个 HTML 元素：
```
	<div ng-app="" ng-init="names=[
	{name:'Jani',country:'Norway'},
	{name:'Hege',country:'Sweden'},
	{name:'Kai',country:'Denmark'}]">
	 
	<p>循环对象：</p>
	<ul>
	  <li ng-repeat="x    in names">
	    {{ x.name + ', ' + x.country }}
	  </li>
	</ul>
	 
	</div>
```

 - ng-app 指令
	ng-app 指令定义了 AngularJS 应用程序的 根元素。
	ng-app 指令在网页加载完毕时会自动引导（自动初始化）应用程序。

 - ng-init 指令
	ng-init 指令为 AngularJS 应用程序定义了 初始值。
	通常情况下，不使用 ng-init。您将使用一个控制器或模块来代替它。

 - ng-model 指令
	ng-model 指令 绑定 HTML 元素 到应用程序数据。
	ng-model 指令也可以：
	为应用程序数据提供类型验证（number、email、required）。
	为应用程序数据提供状态（invalid、dirty、touched、error）。
	为 HTML 元素提供 CSS 类。
	绑定 HTML 元素到 HTML 表单。
 - ng-repeat 指令
	ng-repeat 指令对于集合中（数组中）的每个项会 克隆一次 HTML 元素。

 - 创建自定义的指令
	除了 AngularJS 内置的指令外，我们还可以创建自定义指令。
	你可以使用 .directive 函数来添加自定义的指令。
	要调用自定义指令，HTML 元素上需要添加自定义指令名。
	使用驼峰法来命名一个指令， runoobDirective, 但在使用它时需要以 - 分割, runoob-directive:

```
	<body ng-app="myApp">
	<runoob-directive></runoob-directive>
	<script>
	var app = angular.module("myApp", []);
	app.directive("runoobDirective", function() {
	    return {
	        template : "<h1>自定义指令!</h1>"
	    };
	});
	</script>
	
	</body>
```

	restrict 值可以是以下几种:
	E 作为元素名使用
	A 作为属性使用
	C 作为类名使用
	M 作为注释使用
	

#应用状态
 - ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error):

```<form ng-app="" name="myForm" ng-init="myText = 'test@runoob.com'">
    Email:
    <input type="email" name="myAddress" ng-model="myText" required></p>
    <h1>状态</h1>
    {{myForm.myAddress.$valid}}
    {{myForm.myAddress.$dirty}}
    {{myForm.myAddress.$touched}}
```</form>

#CSS 类
	ng-model 指令根据表单域的状态添加/移除以下类：
	ng-empty
	ng-not-empty
	ng-touched
	ng-untouched
	ng-valid
	ng-invalid
	ng-dirty
	ng-pending
	ng-pristine

```
	<style>
	input.ng-invalid {
	    background-color: lightblue;
	}
	</style>
	<body>
	
	<form ng-app="" name="myForm">
	    输入你的名字:
	    <input name="myAddress" ng-model="text" required>
	</form>
```

#Scope 概述
	AngularJS 应用组成如下：
	View(视图), 即 HTML。
	Model(模型), 当前视图中可用的数据。
	Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。

#根作用域
	所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
	$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。
	
#AngularJS 过滤器
	过滤器可以使用一个管道字符（|）添加到表达式和指令中。

	currency	格式化数字为货币格式。
	filter	从数组项中选择一个子集。
	lowercase	格式化字符串为小写。
	orderBy	根据某个表达式排列数组。
	uppercase	格式化字符串为大写。
	
--->demo2

#AngularJS 服务(Service)

##什么是服务？
	在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用。
	AngularJS 内建了30 多个服务。
	有个 $location 服务，它可以返回当前页面的 URL 地址。
##为什么使用服务?
	在很多服务中，比如 $location 服务，它可以使用 DOM 中存在的对象，类似 window.location 对象，但 window.location 对象在 AngularJS 应用中有一定的局限性。
	AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好。
	
	   						window.location	          					$location.service
目的							允许对当前浏览器位置进行读写操作	允许对当前浏览器位置进行读写操作
API							暴露一个能被读写的对象			暴露jquery风格的读写器
是否在AngularJS应用生命周期中和应用整合		否			可获取到应用声明周期内的每一个阶段，并且和$watch整合
是否和HTML5 API的无缝整合				否			是（对低级浏览器优雅降级）
和应用的上下文是否相关					否，window.location.path返回"/docroot/actual/path"							是，$location.path()返回"/actual/path"

##各种服务

 - $http 服务:$http 是 AngularJS 应用中最常用的服务。 服务向服务器发送请求，应用响应服务器传送过来的数据。
	
 - $timeout 服务:AngularJS $timeout 服务对应了 JS window.setTimeout 函数。

 - $interval 服务:AngularJS $interval 服务对应了 JS window.setInterval 函数。

 - 创建自定义服务
 
 ---->server.html
 
 
##路由

 - 当我们点击以上的任意一个链接时，向服务端请的地址都是一样的 (http://runoob.com/)。 因为 # 号之后的内容在向服务端请求时会被浏览器忽略掉。 所以我们就需要在客户端实现 # 号后面内容的功能实现。 AngularJS 路由 就通过 # + 标记 帮助我们区分不同的逻辑页面并将不同的页面绑定到对应的控制器上。
 - 通常我们的URL形式为 http://runoob.com/first/page，但在单页Web应用中 AngularJS 通过 # + 标记 实现

##步骤
 - 、载入了实现路由的 js 文件：angular-route.js。
 - 、包含了 ngRoute 模块作为主应用模块的依赖模块。  angular.module('routingDemoApp',['ngRoute'])
 - 使用 ngView 指令 ：<div ng-view></div> 该 div 内的 HTML 内容会根据路由的变化而变化。
 - 、配置 $routeProvider，AngularJS $routeProvider 用来定义路由规则。
	 module.config(['$routeProvider', function($routeProvider){
	    $routeProvider
	        .when('/',{template:'这是首页页面'})
	        .when('/computers',{template:'这是电脑分类页面'})
	        .when('/printers',{template:'这是打印机页面'})
	        .otherwise({redirectTo:'/'});
	}]);
 - $routeProvider 为我们提供了 when(path,object) & otherwise(object) 函数按顺序定义所有路由，函数包含两个参数:
	第一个参数是 URL 或者 URL 正则规则。
	第二个参数是路由配置对象。

##路由设置对象
 - template:
	如果我们只需要在 ng-view 中插入简单的 HTML 内容，则使用该参数：
 - .when('/computers',{template:'这是电脑分类页面'})
 - templateUrl:
	如果我们只需要在 ng-view 中插入 HTML 模板文件，则使用该参数：
 - $routeProvider.when('/computers', {
    templateUrl: 'views/computers.html',});
	以上代码会从服务端获取 views/computers.html 文件内容插入到 ng-view 中。
 - controller:
	function、string或数组类型，在当前模板上执行的controller函数，生成新的scope。
 - controllerAs:
	string类型，为controller指定别名。
 - redirectTo:
	重定向的地址。
 - resolve:
	指定当前controller所依赖的其他模块。
	
	语法：
	$routeProvider.when(url, {
    template: string,
    templateUrl: string,
    controller: string, function 或 array,
    controllerAs: string,
    redirectTo: string, function,
    resolve: object<key, function>
});

#directive应用

 ---->directive.html


#select
	AngularJS 可以使用数组或对象创建一个下拉列表选项。
	
 - 在 AngularJS 中我们可以使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出
 - ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表
 
	 区别:ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：
	使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。

---->select.html

#AngularJS 表格

----》table.html

#HTML DOM

----》html Dom.html

#AngularJS 事件

----->event.html

#form
novalidate 属性在应用中不是必须的，但是你需要在 AngularJS 表单中使用，用于重写标准的 HTML5 验证

---->from.html   form1.html


#AngularJS 全局 API
	AngularJS 全局 API 用于执行常见任务的 JavaScript 函数集合，如：
	比较对象
	迭代对象
	转换对象
	angular.lowercase()	转换字符串为小写
	angular.uppercase()	转换字符串为大写
	angular.isString()	判断给定的对象是否为字符串，如果是返回 true。
	angular.isNumber()	判断给定的对象是否为数字，如果是返回 true。
 
----->api.html

#bootstrap.css

---->bootstrap.html

#AngularJS 包含
		//注意加单引号
---->includes.html


#AngularJS 动画

------>animate.html

#AngularJS 依赖注入
	wiki 上的解释是：依赖注入（Dependency Injection，简称DI）是一种软件设计模式，在这种模式下，一个或更多的依赖（或服务）被注入（或者通过引用传递）到一个独立的对象（或客户端）中，然后成为了该客户端状态的一部分。
	该模式分离了客户端依赖本身行为的创建，这使得程序设计变得松耦合，并遵循了依赖反转和单一职责原则。与服务定位器模式形成直接对比的是，它允许客户端了解客户端如何使用该系统找到依赖
	一句话：没事你不要来找我，有事我会去找你。

 - AngularJS 提供很好的依赖注入机制。以下5个核心组件用来作为依赖注入：
	value
	factory
	service
	provider
	constant
 
 
