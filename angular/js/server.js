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

























