//回调的应用（同步）

var fs=require("fs");
var data=fs.readFileSync('../other/input.txt');
console.log(data.toString());
console.log("回调结束");


//回调的应用（异步）

var fs=require('fs');

fs.readFile('../other/input.txt',function(err,data){
	if(err){
		return console.log(err);
	}
	console.log(data.toString());
})

console.log("回调结束");
