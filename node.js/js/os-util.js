var os = require('os');

//cpu的字节序
console.log('cpu'+os.endianness());

//操作系统名
console.log('操作系统名:'+os.type());

//操作系统名
console.log('操作系统名:'+os.platform());

//系统内存总量
console.log('总量:'+os.totalmem()+"bytes");

//操作系统空闲内存量

console.log('空闲内存量'+os.freemem()+'bytes');

//操作系统发行版本

console.log('版本'+os.release());
