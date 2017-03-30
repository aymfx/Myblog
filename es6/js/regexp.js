//ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的Unicode字符。也就是说，会正确处理四个字节的UTF-16编码。

/*/^\uD83D/u.test('\uD83D\uDC2A')
// false
/^\uD83D/.test('\uD83D\uDC2A')
// true*/

//点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。

/*var s = '𠮷';

/^.$/.test(s) // false
/^.$/u.test(s) // true*/

//ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。
/*/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
/\u{20BB7}/u.test('𠮷') // true*/

//量词:使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符。

/*/a{2}/.test('aa') // true
/a{2}/u.test('aa') // true
/𠮷{2}/.test('𠮷𠮷') // false
/𠮷{2}/u.test('𠮷𠮷') // true*/

//预定义模式:u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的Unicode字符。

/*/^\S$/.test('𠮷') // false
/^\S$/u.test('𠮷') // true*/


//利用这一点，可以写出一个正确返回字符串长度的函数。
/*function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
codePointLength(s) // 2
*/









