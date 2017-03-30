//字符的unicode表示法

/*console.log("\u0061"); //a

console.log("\uD842\uDFB7");//𠮷

//es6  只要将码点放入大括号，就能正确解读该字符

console.log("\u{42}\u{45}\u{69}");//BEi

let hello = 123;
console.log(hell\u{6F}) // 123*/


//JavaScript 共有6种方法可以表示一个字符
/*
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
*/

//\u0000~\uFFFF 表示单字节

//codePointAt()

/*var s='𠮷a';
console.log(s.length); //3
console.log(s.codePointAt(0));//134071
console.log(s.codePointAt(1));//57271
console.log(s.codePointAt(2));//97

*/

/*var s = '𠮷a';
for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}*/
// 20bb7
// 61

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

/*console.log(is32Bit("𠮷")) // true
console.log(is32Bit("a")) // false*/

/*var a=0xffff;
var b=(a+a).toString(16);
console.log(b);//ox1fffe*/


//String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。
/*String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true*/

//String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。

/*for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"
*/

//这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。

/*var text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷"
*/

//有一个提案，提出字符串实例的at方法，可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。

//before
/*console.log('abc'.charAt(0)) // "a"
console.log('𠮷'.charAt(0)) // "\uD842"  //�*/

//es6 草案

/*console.log('abc'.at(0)) // "a"
console.log('𠮷'.at(0)) // "\uD842"  //�*/


//三种确定字符创是否存在的办法 startsWith endsWith includes

/*var s= "Hello World!";
console.log(s.startsWith('Hello'));//true
console.log(s.endsWith('!'));//true
console.log(s.includes('0'));//false
*/

/*'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""*/

//padStart()，padEnd():ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

/*'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。

'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。

'abc'.padStart(10, '0123456789')
// '0123456abc'
如果省略第二个参数，默认使用空格补全长度。

'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。

'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
另一个用途是提示字符串格式。

'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"*/


//模板字符串
/*
 $('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
 * */







