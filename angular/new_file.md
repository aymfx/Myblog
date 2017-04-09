#AngularJS ng-model 指令
	ng-model 指令用于绑定应用程序数据到 HTML 控制器(input, select, textarea)的值。
```
<div ng-app="myApp" ng-controller="myCtrl">
    名字: <input ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "ly";
});
</script>
```
	可以实现双重绑定
	
#验证用户输入

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body ng-app="form">
		<h2>表单验证</h2>
		<form ng-controller='validateCtrl' name="myfrom">
			<p>用户名<br />
			<input type="text" ng-model="user" name="user" required=""/>
			<span style="color:red" ng-show="myfrom.user.$invalid && myfrom.user.$dirty">
				<span ng-show="myfrom.user.$error.required">用户名是必填项</span>
			</span>
			</p>
			<p>邮箱:<br />
			<input type="email" ng-model="email" required="" name="email" />
			<span style="color:red" ng-show="myfrom.email.$invalid && myfrom.email.$dirty">
				<span ng-show="myfrom.email.$error.required">邮箱是必填项</span>
				<span ng-show="myfrom.email.$error.email">邮箱必须合法</span>
			</span>
			</p>
			<p>
				<input type="submit" ng-disabled="myfrom.user.$invalid && myfrom.user.$dirty || myfrom.email.$invalid && myfrom.email.$dirty"/>
			</p>
		</form>
		
		
		
		<script src="js/angular.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			var app=angular.module('form',[]);
	
			app.controller('validateCtrl', function($scope) {
				    $scope.user = 'John Doe';
				    $scope.email = 'john.doe@gmail.com';
			});
		</script>
	</body>
</html>


<!--
$dirty		表单有填写记录
$valid		字段内容合法的
$invalid	字段内容是非法的
$pristine	表单没有填写记录
提示信息会在 ng-show 属性返回 true 的情况下显示。
-->
```

#CSS 类

	ng-model 指令基于它们的状态为 HTML 元素提供了 CSS 类
	

```
<style>
	input.ng-invalid {/*元素名+状态值*/
	    background-color: lightblue;  
	}
	</style>
	<body>
	
	<form ng-app="" name="myForm">
	    输入你的名字:
	    <input name="myAddress" ng-model="text" required>
	</form>
	
```
ng-model 指令根据表单域的状态添加/移除以下类：
ng-empty    
ng-not-empty
ng-touched
ng-untouched
ng-valid
ng-invalid
ng-dirty  表单有填写记录
ng-pending  未发生时
ng-pristine 初始时

#AngularJS Scope(作用域)

	Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
	Scope 是一个对象，有可用的方法和属性。
	Scope 可应用在视图和控制器上。

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body ng-app="event">
		<div ng-controller="personCtrl">

			<button ng-click="toggle()">隐藏/显示</button>
			
			<p ng-hide="myVar">
			名: <input type="text" ng-model="firstName"><br>
			姓名: <input type="text" ng-model="lastName"><br>
			<br>
			Full Name: {{firstName + " " + lastName}}
			</p>

		</div>
		<!-----------分割线--------------------------------------------->
		<script src="js/angular.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" charset="utf-8">
			var app=angular.module('event',[]);
			app.controller('personCtrl', function($scope) {
			    $scope.firstName = "John",   //属性
			    $scope.lastName = "Doe"
			    $scope.myVar = false;
			    $scope.toggle = function() {  //方法
			        $scope.myVar = !$scope.myVar;
			    };
			});
		</script>
	</body>
</html>

```
	视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{firstName + " " + lastName}}。

#Scope 概述
	AngularJS 应用组成如下：
		View(视图), 即 HTML。
		Model(模型), 当前视图中可用的数据。
		Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。
#Scope 作用范围
	$scop只能管，它所在控制器定义的范围
	

```
<div ng-app="myApp" ng-controller="myCtrl">
	
	<ul>
	    <li ng-repeat="x in names">{{x}}</li>//每个 <li> 元素可以访问当前的重复对象，这里对应的是一个字符串， 并使用变量 x 表示
	</ul>
	
	</div>
	
	<script>
	var app = angular.module('myApp', []);
	
	app.controller('myCtrl', function($scope) {
	    $scope.names = ["Emil", "Tobias", "Linus"];
	});
	</script>
	
```

#根作用域
	所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。
	

```
<div ng-app="myApp" ng-controller="myCtrl">
	
	<h1>{{lastname}} 家族成员:</h1>
	
	<ul>
	    <li ng-repeat="x in names">{{x}} {{lastname}}</li>
	</ul>
	
	</div>
	
	<script>
	var app = angular.module('myApp', []);
	
	app.controller('myCtrl', function($scope, $rootScope) {
	    $scope.names = ["Emil", "Tobias", "Linus"];
	    $rootScope.lastname = "Refsnes";
	});
	</script>
```

#AngularJS 控制器
	ng-controller 指令定义了应用程序控制器。控制器是 JavaScript 对象，由标准的 JavaScript 对象的构造函数 创建
```
<div ng-app="myApp" ng-controller="myCtrl">

名: <input type="text" ng-model="firstName"><br>
姓: <input type="text" ng-model="lastName"><br>
<br>
姓名: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "l";
    $scope.lastName = "y";
});
</script>
```

	控制器和scope一起使用，控制器的范围就是scope作用的范围

#AngularJS 过滤器

```
1、uppercase，lowercase 大小写转换
{{ "lower cap string" | uppercase }}   // 结果：LOWER CAP STRING
{{ "TANK is GOOD" | lowercase }}      // 结果：tank is good
2、date 格式化
{{1490161945000 | date:"yyyy-MM-dd HH:mm:ss"}} // 2017-03-22 13:52:25
3、number 格式化（保留小数）
{{149016.1945000 | number:2}}
4、currency货币格式化
{{ 250 | currency }}            // 结果：$250.00
{{ 250 | currency:"RMB ￥ " }}  // 结果：RMB ￥ 250.00
5、filter查找
输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
filter 过滤器从数组中选择一个子集
 // 查找name为iphone的行
{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | filter:{'name':'iphone'} }}        
6、limitTo 截取
{{"1234567890" | limitTo :6}} // 从前面开始截取6位
{{"1234567890" | limitTo:-4}} // 从后面开始截取4位
7、orderBy 排序
 // 根id降序排
{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | orderBy:'id':true }}

// 根据id升序排
{{ [{"age": 20,"id": 10,"name": "iphone"},
{"age": 12,"id": 11,"name": "sunm xing"},
{"age": 44,"id": 12,"name": "test abc"}
] | orderBy:'id' }}
```
##自定义过滤器

	

```
//过滤器 number   
	{{10000 | filternumber }}  //100
	app.filter('filternumber',function(){  
			return function(target){
				target=target/100;
				return parseFloat(target);
			}
	})
```

#AngularJS 服务(Service)
	在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用。AngularJS 内建了30 多个服务。

 -  $location 服务，它可以返回当前页面的 URL 地址
	 

```
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});
```
 - $http 是 AngularJS 应用中最常用的服务。 服务向服务器发送请求，应用响应服务器传送过来的数据。

```
 var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm").then(function (response) {
        $scope.myWelcome = response.data;
    });
});
```

 - $timeout 服务 AngularJS $timeout 服务对应了 JS window.setTimeout 函数。
 - $interval 服务 AngularJS $interval 服务对应了 JS window.setInterval 函数。
 - 创建自定义服务
	

```
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});
```

###server的小demo
 - html页面
 

```
<!DOCTYPE html>
<html ng-app="demo3">
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
		<!--AngularJS 服务(Service)-->
		
		<div id="" ng-controller="myDemo1">
			<p>获去url地址</p>
			<p>{{"我的地址是"+myUrl}}</p>
		</div>
		
		<div id="" ng-controller="myDemo2">
			<p>获取服务端传来的数据</p>
			<p>{{"刘洋说:"+data}}</p>
		</div>
		
		<div id="" ng-controller="myDemo3">
			<p>延时定时器</p>
			<p>{{"刘洋说:"+data}}</p>
		</div>
		
		<div id="" ng-controller="myDemo4">
			<p>定时器</p>
			<p>{{"刘洋说现在时间:"+data}}</p>
		</div>
		
		<div ng-controller="myDemo5">
			<p>自定义函数，讲数字转换成16进制数</p>
			<input type="text" ng-model="data"/>
			<p>{{"我是16进制数"+data1}}</p>
		</div>
		
		<!--去抖动-->
		<div ng-controller="myDemo6">
			<p>用ajax发送请求</p>
			<input type="text" ng-model="key"/>
			<ul>
				<li ng-repeat="x in arr">
					{{x.name}}
				</li>
			</ul>
		</div>

		<script src="js/angular.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/server.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
```
 - js页面

```
var app=angular.module('demo3',[]);

app.controller('myDemo1',['$scope',"$location",function(s,l){
	s.myUrl=l.absUrl();
}])

app.controller('myDemo2',['$scope',"$http",function(s,h){
	h.get("other/welcome.php").then(function(r){
		s.data=r.data;
	})
}])

app.controller('myDemo3',['$scope',"$timeout",function(s,t){
	s.data="今天天气不错呀";
	
	t(function(){
		s.data="我们去爬山吧"
	},2000)

}])

app.controller('myDemo4',['$scope',"$interval",function(s,i){
	s.data=new Date().toLocaleTimeString();
	
	i(function(){
		s.data=new Date().toLocaleTimeString();
	},1000)
}])

app.service('hexafy',function(){
	  this.myfun=function(x){
	  	return parseInt(x,16);
	  }
})

app.controller('myDemo5',['$scope','hexafy',function(s,h){
	  
	  s.$watch('data1',function(newkey,oldkey){
	  	    console.log(h.myfun(s.data));
	  		s.data1=h.myfun(s.data);
	  })
}])

app.controller('myDemo6',['$scope','$http',function(scope,http){
	//
	function debounce(fn,wait){
		var last=null;
		
		return function(){
			var arg=arguments;
			var later=function(){
				fn.apply(null,arg);
			}
			clearTimeout(last);
			last=setTimeout(function(){
				later();
			},300);
		}
	}

	  scope.$watch('key',debounce(function(newv,old){
	  			console.log(arguments,"woyou");
	  	      http({
	  	      		url:'/bgs/poi/search_poi_nearby',
                     params: {
                       keyword: newv,
                       offset: 0,
                       limit: 20
                     }
                   }).then(function(data){
                   		console.log('hh',data.data);
                   		scope.arr=data.data;
                   },function(){})
	  },300))
}])
```



