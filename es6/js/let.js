//let命令:ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效

/*	{
		var a=1;
		let b=2;
		console.log(a,b);//1,2
	}
		console.log(a,b);//: b is not defined
*/

//for循环的计数器，就很合适使用let命令。

/*	for (let i=0;i<9;i++) {
		console.log(i);
	}
	console.log(i); //i is not defined
*/

//for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。

/*	for (let i=0;i<3;i++) {
		let i="asd";
		console.log(i); //asd
	}

*/

//不存在变量提升：var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

/*	// var 的情况
	console.log(foo); // 输出undefined
	var foo = 2;
	
	// let 的情况
	console.log(bar); // 报错ReferenceError
	let bar = 2;
*/

//暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
//ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

/*	var tmp;
	if(true){
		tmp="abv"; //tmp is not defined
		let tmp;
	}
*/



/*
	if (true) {
	  // TDZ开始
	  tmp = 'abc'; // ReferenceError
	  console.log(tmp); // ReferenceError
	
	  let tmp; // TDZ结束
	  console.log(tmp); // undefined
	
	  tmp = 123;
	  console.log(tmp); // 123
	}
*/
//“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

/*
	if(true){
		tmp="abc";//tmp is not defined
		console.log(typeof tmp);
		let tmp;
	}

*/

//有些“死区”比较隐蔽，不太容易发现。
/*
function bar(x = y, y = 2) { //y is not defined
  return [x, y];
}

bar(); // 报错
*/

/*
// 不报错
var x = x;
// 报错
let x = x; //Identifier 'x' has already been declared
// ReferenceError: x is not defined
*/

/*
 ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。

总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
*/

//不允许重复声明:let不允许在相同作用域内，重复声明同一个变量。
/*
	// 报错
	function s() {
	  let a = 10;
	  let a = 1;
	}
	s();// Identifier 'a' has already been declared

*/


//为什么需要块级作用域？:ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

//第一种场景，内层变量可能会覆盖外层变量。

/*
	var tmp = new Date();
	
	function f() {
	  console.log(tmp);
	  if (false) {
	    var tmp = 'hello world';
	  }
	}
	
	f(); // undefined
*/

//第二种场景，用来计数的循环变量泄露为全局变量。
/*
	var s = 'hello';
	
	for (var i = 0; i < s.length; i++) {
	  console.log(s[i]);
	}
	
	console.log(i); // 5
*/

//let实际上为 JavaScript 新增了块级作用域。

/*
	function f1() {
	  let n = 5;
	  if (true) {
	    let n = 10;
	  }
	  console.log(n); // 5
	}
*/
//ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。但浏览器兼容
/*
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}
*/
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

/*
function f() { console.log('I am outside!'); } 

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  			}

  	f();
}());*/


/*
 function f(){
	return 3;
}
let x = do {
  let t = f();
  t * t + 1;
};

console.log(x);
 */













