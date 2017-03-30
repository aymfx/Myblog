//Destructuring

//数组--------------------------------------
/*
 * let a=9;
{{{{console.log(a)}}}}
*/
//数组中提取值，按照对应位置，对变量赋值。

//before
/*let a = 1;
let b = 2;
let c = 3;

console.log(c);
*/

/*
//es6
let [a,b,c]=[1,2,3];

console.log(c);

*/

/*let [foo, [[bar], baz]] = [1, [[2], 3]];

console.log(bar);//2

let [ , , third] = ["foo", "bar", "baz"];

console.log(third);
*/

/*let [head, ...tail] = [1, 2, 3, 4];

console.log(tail); //数组
console.log(head); //1*/

/*let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []*/

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

/*// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};*/

//默认值：解构赋值允许指定默认值。

/*let [foo = true] = [];
foo // true
*/
//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。

/*let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
*/
//对象的解构赋值---------------------

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

/*let {bar,foo}={foo:"aaa",fo1:"bbb"}

console.log(bar,foo);//undefined "aaa"
*/

//如果变量名与属性名不一致，必须写成下面这样。

/*var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;

console.log(f,l);*/

/*注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。*/

/*let a,b;

[a,b]=[1,2];

console.log(a,b);//1 2*/ 

/*let a,b;

let [a,b]=[1,2];

console.log(a,b); //Identifier 'a' has already been declared

*/


/*let foo,bar;
[foo]={foo:"asd"};

console.log(foo);//undefined is not a function*/


/*let foo,bar;
let [foo]={foo:"asd"};
console.log(foo);//Identifier 'foo' has already been declared
*/

/*let foo;
({foo} = {foo: 1});
console.log(foo);//destructuring.js:114 1

*/

//let命令下面一行的圆括号是必须的，否则会报错。因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句。

/*let baz;
({bar: baz} = {bar: 1}); // 成功*/

/*var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

var { loc: { start: { line }} } = node;
line // 1
loc  // error: loc is undefined
start // error: start is undefined*/

//下面是嵌套赋值的例子

/*let obj={};
let arr=[];

({foo:obj.prop,bar:arr[0]}={foo:'我上午',bar:true});

console.log(obj.prop,arr[0]); //我上午 true
*/
//对象的解构也可以指定默认值。

/*var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x:y = 3} = {};
y // 3

var {x:y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"*/

//字符串的解构赋值-------------------

/*const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"*/

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
/*let {length : len} = 'hello';
len // 5*/

//数值和布尔值的解构赋值
/*var a={name:"ly",
	   say:function(){
	   	   console.log('hah');
	   }
}

let {name,say}=a;

say();*/

//数值和布尔值的解构赋值

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

/*let {toString: s} = 123;
console.log(s === Number.prototype.toString) // true

let {toString: s} = true;
console.log(s === Boolean.prototype.toString) // true*/

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

/*let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError*/

//函数参数的解构赋值

//[[1, 2], [3, 4]].map(([a, b]) => a + b);

/*function add([x, y]){
  return x + y;
}

add([1, 2]); // 3*/


//从函数返回多个值
/*
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
*/

//提取JSON数据
/*
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
*/
//遍历Map结构

/*var map=new Map();

map.set('first','hello');
map.set('second','world');

for (let [key,value] of map) {
	console.log(key+"is"+value);
}
*/

//输入模块的指定方法:加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

const {sourceMapConsumer,sourceNode} = require('source-map');

