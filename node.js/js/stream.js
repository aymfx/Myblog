
/*//创建写入流
var fs=require('fs');

var data='';

//创建可读流
var readerStream=fs.createReadStream('../other/input.txt');

//设置uft8
readerStream.setEncoding('utf8');
var i=0;
//处理事件流
readerStream.on('data',function(chunk){
	  i++;
	 console.log(i+"data:"+chunk);
	  data +=chunk;
});

readerStream.on('end',function(chunk){
	  console.log(data)
});

readerStream.on('error',function(err){
	  console.log(err.stack)
});*/

//创建写入流
/*var fs=require('fs');
var data='，这句话没毛病';
//创建一个可以写入的文件
var writeStream=fs.createWriteStream('../other/output.txt');
//使用utf8写入数据

	writeStream.write(data,'utf8');
	
	//标记文件末尾
	writeStream.end();
	
	//处理事件流
	writeStream.on('finsh',function(){
		console.log('写入完成');
	})
	
	writeStream.on('error',function(err){
		  console.log(err.stack);
	});

	console.log("程序执行完毕");*/



//pipe 两个文件合并
var fs=require('fs');
var readStream=fs.createReadStream('../other/input.txt');
var writeStream=fs.createWriteStream('../other/output.txt');

//管道读写操作
readStream.pipe(writeStream);
console.log("程序执行完毕");
//会把文件内容覆盖掉

//链式流

var fs=require('fs');

var zlib=require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('../other/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('../other/input.txt.gz'));

console.log("文件压缩完成");




