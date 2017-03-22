var hellow=require('./hellow');

hellow.world();

/*以上实例中，代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。
Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
 * 
 * */

var hellow1=new hellow();
hellow1.setName('aymfx');
hellow1.sayHello();



