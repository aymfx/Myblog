var app=angular.module('select',[]);

app.controller("myCtrl",['$scope',function(scope){
	scope.selectName="ly";
	scope.names=['ly','md','wx'];
	scope.sites=[
    {site : "Google", url : "http://www.google.com"},
    {site : "Google", url : "http://www.runoob.com"},
    {site : "Google", url : "http://www.taobao.com"}
];
	scope.sites2={
		site : "Google",
		site1 : "yahhp",
		site2 : "baidu"
	}
	scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    }
}])
