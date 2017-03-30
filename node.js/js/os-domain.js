var EventEmitter=require('events').eventEmitter;

var domain=require('domain');

var emitter1= new EventEmitter();

//创建域

var domain1 = domain.create();

domain1.on('error',function(err){
	console.log('')
})
