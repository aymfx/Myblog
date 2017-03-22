//函数的互调
/*function say(word){
	console.log(word);
}

function execute(someFunction,value){
	someFunction(value);
}

execute(say,"我知道，我全都知道");*/

//匿名函数
/*execute(function(text){
	console.log(text);
},"我们唱歌，我们跳舞");*/

//函数传递是如何让HTTP服务器工作的
var http=require('http');

http.createServer(function(request,response){
	  response.writeHead(200,{"Content-Type":"text/plain;charset:utf-8"});
	  response.write('<!doctype html>'+  
'<html>'+  
'<head>'+  
'<meta charset="utf-8"/>'+  
'<title>米诺</title>'+  
'</head>'+  
'<body>'+  
'<a href="/home.js">主页</a>'+  
'<a href="/contact.js">Contact</a>'+  
'</body>'+  
'</html>');
	  response.end();
}).listen(8888);




