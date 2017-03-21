//用法
/*var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter();
event.on('some',function(){
	console.log("我只是一个事件");
})
setTimeout(function(){
	  event.emit('some');
},2000);*/

//依次调用
/*var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter();
event.on('some',function(a,b){
	console.log("some3"+a+":"+b);
});
event.on('some',function(a,b){
	console.log("some1"+a+":"+b);
});

event.on('some',function(a,b){
	console.log("some2"+a+":"+b);
});

event.emit('some',12,13);
event.emit('some',12,13);*/


//API

//once
/*var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter();

event.once('some',function(a,b){
	console.log("some2"+a+":"+b);
});

event.once('some',function(a,b){
	console.log("some1"+a+":"+b);
});

event.emit('some',12,13);
event.emit('some',12,13);
*/

//addListener()

/*var eventEmitter=require('events').EventEmitter;
var server=new eventEmitter();
var fn1=function(){
	console.log("我没有event");
}

server.addListener('some',fn1);
server.emit('some');
server.removeListener('some',fn1);
server.emit('some');*/

//err事件
/*var emitter=require('events').EventEmitter;
emitter=new emitter();
emitter.emit('error');
console.log(emitter)*/


