var net =require('net');

var server=net.createServer(function(connection){
	console.log('屏幕已经连接');
	connection.on('on',function(){
		console.log('客户端关闭连接');
	});
	connection.write('你好，世界');
	connection.pipe(connection);
});

server.listen(8888,function(){
	  console.log('服务已经监听');
})
