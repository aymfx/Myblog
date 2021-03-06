/*序号	   方法 & 描述
1	path.normalize(p)规范化路径，注意'..' 和 '.'。
2	path.join([path1][, path2][, ...])用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
3	path.resolve([from ...], to)将 to 参数解析为绝对路径。
4	path.isAbsolute(path)判断参数 path 是否是绝对路径。
5	path.relative(from, to)用于将相对路径转为绝对路径。
6	path.dirname(p)返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
7	path.basename(p[, ext])返回路径中的最后一部分。同 Unix 命令 bashname 类似。
8	path.extname(p)返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
9	path.parse(pathString)返回路径字符串的对象。
10	path.format(pathObject)从对象中返回路径字符串，和 path.parse 相反。

1	path.sep平台的文件路径分隔符，'\\' 或 '/'。
2	path.delimiter平台的分隔符, ; or ':'.
3	path.posix提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
4	path.win32提供上述 path 的方法，不过总是以 win32 兼容的方式交互。*/

var path=require('path');

//格式化路劲

console.log('格式化'+path.normalize('../other/'));

//链接路径

console.log('连接'+path.join('/test','text2','../other/'));


//转换为绝地路劲

console.log('绝对路径'+path.resolve('path-util.js'));


//路径中文件的后缀名

console.log('后缀'+path.extname('path-util.js'));







