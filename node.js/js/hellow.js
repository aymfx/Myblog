//学习node.js
//创建一个对象下面的方法
console.log("我喜欢js")
function hehe(){
	var name;
	this.setName=function(thyName){
		name=thyName;
	}
	this.sayHello=function(){
		console.log('hellow'+name);
	};
};

module.exports=hehe;

