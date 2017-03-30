	/*scope 是模型。
scope 是一个 JavaScript 对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用*/
    	 var app=angular.module("myApp",[]);
    	 app.controller("myCtrl",["$scope",function(scope){
    	 	  scope.name="liuyang";
    	 	  scope.sayHello = function (){
    	 	  	 scope.greeting="hello "+scope.name + "!";
    	 	  }
    	 }])
    	 /*所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。*/
		app.controller("myCtrl1",["$scope","$rootScope",function(s,r){
			  s.names=["ly",'md','hh','wx'];
			  r.lastName = "memory";
		}])
		
	//AngularJS 自定义过滤器
	
	app.run(['$rootScope',function(root){
			root.family=[{name:"ly",age:18},{name:'md',age:18}];
			root.paixu=[1,2,6,7,6,88,15];
			root.arr=[1,5,8,8,6,7,1,9,2,4];
	}])
	
	app.filter("sort",function(){
		  return function(target){
		  	   target.sort(function(a,b){
		  	   	     return a-b;
		  	   });
		  	   
		  	   return target;
		  }
	})
	
	app.filter('nopreate',function(){
		return function(target){
			var arr=[];
			target.filter(function(i,v){
				if(arr.indexOf(i)!=-1){
					arr[arr.indexOf(i)]=i;
				}else{
					arr.push(i);
				}
				 
			});
			
			return arr;
		}
	})
	
	