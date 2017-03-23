var util = require('util');

function Person(){
	this.name='liuyang';
	this.toString=function(){
		return this.name;
	};
}

var obj=new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true,1,true));
