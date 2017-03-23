#npm常用命令
 - NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。



#交互式解释器(Read Eval Print Loop:交互式解释器）)
REPL 命令
ctrl + c - 退出当前终端。
ctrl + c 按下两次 - 退出 Node REPL。
ctrl + d - 退出 Node REPL.
向上/向下 键 - 查看输入的历史命令
tab 键 - 列出当前命令
.help - 列出使用命令
.break - 退出多行表达式
.clear - 退出多行表达式
.save filename - 保存当前的 Node REPL 会话到指定文件
.load filename - 载入当前 Node REPL 会话的文件内容。

#Node.js 回调函数
Node.js 异步编程的直接体现就是回调。
异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。
例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

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

#Node.js 事件循环
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.


Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）
在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

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


#node.js事件
Node.js 所有的异步I/O 操作在完成时都会发送一个事件到事件队列。
Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。 你可以通过require("events");来访问该模块。

//用法
var eventEmitter=require('events').EventEmitter;
var event=new eventEmitter();
event.on('some',function(){
	console.log("我只是一个事件");
})
setTimeout(function(){
	  event.emit('some');
},2000);

##EventEmitter介绍
events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。
EventEmitter 的每个事件由一个事件名和若干个参 数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。

//依次调用
var eventEmitter=require('events').EventEmitter;
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


##EventEmitter常用的API

EventEmitter.on(event, listener)
emitter.addListener(event, listener) 为指定事件注册一个监听器，接受一个字 符串 event 和一个回调函数 listener。

EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传 递若干可选参数到事件监听器的参数表。
EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

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

#Node.js Buffer(缓冲区)

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。


//几种创建buffer方法

//方法一
var buf=new Buffer(10);//创建长度为 10 字节的 Buffer 实例

//方法二

var buf=new Buffer([10,12,13,56,25]);

//方法三
var buf=new Buffer('我是一个小孩子','utf-8'); //通过一个字符串来创建 Buffer 实例：

//写入缓存区
buf.write(string, [offset], [length], [encoding]);
参数描述如下：
string - 写入缓冲区的字符串。
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length
encoding - 使用的编码。默认为 'utf8' 。
返回值
返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

//从缓冲区读取数据
读取 Node 缓冲区数据的语法如下所示：
buf.toString([encoding,[start],[end])
参数

参数描述如下：
encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾。
返回值
解码缓冲区数据并使用指定的编码返回字符串。


//将 Buffer 转换为 JSON 对象

语法

将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
buf.toJSON()


//缓冲区合并
Node 缓冲区合并的语法如下所示：
Buffer.concat(list,[totalLength])
参数

参数描述如下：
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
返回值
返回一个多个成员合并的新 Buffer 对象。

//缓冲区比较

Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
buf.compare(otherBuffer);
参数
otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
返回值
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
实例

//拷贝缓冲区
Node 缓冲区拷贝语法如下所示：
buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
参数描述如下：
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
返回值
没有返回值。

//缓冲区裁剪

Node 缓冲区裁剪语法如下所示：
buf.slice([start[, end]])
参数

参数描述如下：
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
返回值

返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

//demo
/*var buf=new Buffer(31);

var len=buf.write('刘洋是一个爱看书的孩子');

console.log("写入的字节数"+len);*/

//demo2

/*var buf=new Buffer(26);
for (var i=0;i<26;i++) {
	buf[i]=i+97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde*/


//demo3
/*var buf=new Buffer('我就是喜欢玩');
var  json=buf.toJSON(buf);
console.log(json)//转换成二进制码*/

//demo4

/*var buf1=new Buffer('123asd');
var buf2=new Buffer('asd123asd');

var buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());*/

//缓冲区比较
/*var bf1=new Buffer('aBC');
var bf2=new Buffer('abc');

var r=bf1.compare(bf2);

if(r<0){
	console.log(1);
}else if(r==0){
	console.log(2);
}else{
	console.log(3);
}*/

//缓冲区拷贝
/*var bf1=new Buffer('ABC');
var bf2=new Buffer(3);
bf1.copy(bf2);
console.log(bf2.toString()+"hah")*/


//剪切
/*var bf1=new Buffer('i love you but');
var bf2=bf1.slice(0,11);
console.log(bf2.toString())*/

//长度
var buffer = new Buffer('www.w3cschool.cn');
//  缓冲区长度
console.log("buffer length: " + buffer.length);

#Node.js Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。
---->代码在stream.js


#Node.js模块系统

为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

##服务端的模块放在哪里
Node.js中自带了一个叫做"http"的模块，我们在我们的代码中请求它并把返回值赋给一个本地变量。
这把我们的本地变量变成了一个拥有所有 http 模块所提供的公共方法的对象。
Node.js 的 require方法中的文件查找策略如下：
由于Node.js中存在4类模块（原生模块和3种文件模块），尽管require方法极其简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同。如下图所示：img/nodejs-require.jpg

###从文件模块缓存中加载
尽管原生模块与文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块。
从原生模块加载
原生模块的优先级仅次于文件模块缓存的优先级。require方法在解析文件名之后，优先检查模块是否在原生模块列表中。以http模块为例，尽管在目录下存在一个http/http.js/http.node/http.json文件，require("http")都不会从这些文件中加载，而是从原生模块中加载。
原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行。

###从文件加载
当文件模块缓存中不存在，而且不是原生模块的时候，Node.js会解析require方法传入的参数，并从文件系统中加载实际的文件，加载过程中的包装和编译细节在前一节中已经介绍过，这里我们将详细描述查找文件模块的过程，其中，也有一些细节值得知晓。
require方法接受以下几种参数的传递：
http、fs、path等，原生模块。
./mod或../mod，相对路径的文件模块。
/pathtomodule/mod，绝对路径的文件模块。
mod，非原生模块的文件模块。


---->代码在module.js


#Node.js 函数
在JavaScript中，一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

---->代码在fn.js




#Node.js 路由
我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。
因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。

							url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
	http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]

---->代码在route.js server.js route-index.js start.js


#Node.js 全局对象
	JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可 以在程序的任何地方访问，即全局变量。
	在浏览器JavaScript 中，通常window 是全局对象， 而Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
	我们在Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process 等，下面逐一介绍。

##process
	process 是一个全局变量，即 global 对象的属性。
	它用于描述当前Node.js 进程状态 的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍process 对象的一些最常用的成员方法。
	process.argv是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名， 从第三个元素开s始每个元素是一个运行参数。

##console
	console 用于提供控制台标准输出，它是由Internet Explorer 的JScript 引擎提供的调试 工具，后来逐渐成为浏览器的事实标准。
	Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。  console.log()：向标准输出流打印字符并以换行符结束。
	console.log 接受若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
	第一个参数是一个字符串，如果没有 参数，只打印一个换行。
	console.error()：与console.log() 用法相同，只是向标准错误流输出。
	console.trace()：向标准错误流输出当前的调用栈。

---->代码在global.js argv.js

#Node.js 常用工具 util
	util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

	util.inherits
	
	util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
	JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。
	

---->代码在util.inherits.js


	util.inspect
	
	util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
	showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
	depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
	特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。
	
---->代码在util.inspect.js

	util.isArray(object)
	
	如果给定的参数 "object" 是一个数组返回true，否则返回false
	

	util.isRegExp(object)
	
	如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

	util.isDate(object)
	
	如果给定的参数 "object" 是一个日期返回true，否则返回false。

	util.isError(object)
	
	如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

---->代码在utils.js

-----http://nodejs.org/api/util.html 了解详细内容。


#Node.js 文件系统

	Node.js 文件系统封装在 fs 模块是中，它提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX 文件系统操作。
	与其他模块不同的是，fs 模块中所有的操作都提供了异步的和 同步的两个版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。我们以几个函数为代表，介绍 fs 常用的功能，并列出 fs 所有函数 的定义和功能。
	
 - fs.readFile
	Node.js读取文件函数语法如下：
	fs.readFile(filename,[encoding],[callback(err,data)])
	filename（必选），表示要读取的文件名。
	encoding（可选），表示文件的字符编码。
	callback 是回调函数，用于接收文件的内容。
	如果不指 定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data，err 表 示有没有错误发生，data 是文件内容。如果指定了 encoding，data 是一个解析后的字符 串，否则 data 将会是以 Buffer 形式表示的二进制数据。
	
 - fs.readFileSync

	fs.readFileSync(filename, [encoding])是 fs.readFile 同步的版本。它接受 的参数和 fs.readFile 相同，而读取到的文件内容会以函数返回值的形式返回。如果有错 误发生，fs 将会抛出异常，你需要使用 try 和 catch 捕捉并处理异常。
	注意：与同步I/O 函数不同，Node.js 中异步函数大多没有返回值。

 - fs.open

	fs.open(path, flags, [mode], [callback(err, fd)])是POSIX open 函数的 封装，与C 语言标准库中的 fopen 函数类似。它接受两个必选参数，path 为文件的路径， flags 可以是以下值。
	r ：以读取模式打开文件。
	r+ ：以读写模式打开文件。
	w ：以写入模式打开文件，如果文件不存在则创建。
	w+ ：以读写模式打开文件，如果文件不存在则创建。
	a ：以追加模式打开文件，如果文件不存在则创建。
	a+ ：以读取追加模式打开文件，如果文件不存在则创建

 - fs.read

	fs.read语法格式如下：
	fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])
	参数说明：
		fd: 读取数据并写入 buffer 指向的缓冲区对象。
		offset: 是buffer 的写入偏移量。
		length: 是要从文件中读取的字节数。
		position: 是文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
		callback:回调函数传递bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。
		
---->http://nodejs.org/api/fs.html
---->readFile.js