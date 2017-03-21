//引入event模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();//emitter-->发射器


//创建事件处理程序
var eventHandler=function connected(){
	console.log("链接成功");
	eventEmitter.emit('data_received');
}

//绑定事件处理程序
eventEmitter.on('conn',eventHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
	 console.log('数据接收成功');
});

//触发connection事件
eventEmitter.emit('conn');

console.log('程序执行完毕');
