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











