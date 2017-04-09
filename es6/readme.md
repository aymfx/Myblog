#学习es6语法

##声明的变化
 - let命令
 
	ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
---->let.js
 - const 命令 
 
	const声明一个只读的常量。一旦声明，常量的值就不能改变。
---->const.js

##变量的解构赋值

 - 数组解析赋值
 
	ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

---->destructuring.js

##字符串的扩展

--->string.js

##正则表达式的扩展

---->regexp.js

##数组的扩展
 -Array.from()：方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

``
	let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
	};
	
	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	
	// ES6的写法
	let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	
	console.log(arr1,arr2);
	 //常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
	 //可以将字符串转换成数组

console.log(Array.from('i love you'));//["i", " ", "l", "o", "v", "e", " ", "y", "o", "u"]

//有第二个参数   类似Map

console.log(Array.from([1,5,3],x => x*2))  //[2, 10, 6]

//有第三个参数
	如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。
 ``
 
 - Array.of方法用于将一组值，转换为数组
  
	//Array.of()
	console.log(Array.of(3,11,18)); //[3, 11, 18]
	
	console.log(Array.of(3)); //[3]
	
	console.log(Array.of(3).length); //1
	
	console.log(Array.of(undefined)); //[undefined]

 - copyWithin() :在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
 
	它接受三个参数。
	target（必需）：从该位置开始替换数据。
	start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
	end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
	
	console.log(['a','s','d','f','u','y','y','t','i','l','o','v','e','y','o','u'].copyWithin(0,8));//["i", "l", "o", "v", "e", "y", "o", "u", "i", "l", "o", "v", "e", "y", "o", "u"]
	
	// 将3号位复制到0号位
	[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
	// [4, 2, 3, 4, 5]
	
	// -2相当于3号位，-1相当于4号位
	[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
	// [4, 2, 3, 4, 5]
	
	// 将3号位复制到0号位
	[].copyWithin.call({length: 5, 3: 1}, 0, 3)
	// {0: 1, 3: 1, length: 5}
	
	// 将2号位到数组结束，复制到0号位
	var i32a = new Int32Array([1, 2, 3, 4, 5]);
	i32a.copyWithin(0, 2);
	// Int32Array [3, 4, 5, 4, 5]

#find()和findIndex()
 - find() //用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
 
 	[1,4,5,-5,6].find((v,i,a) => v*i<18); //1 
 - findIndex:类似于find(),但是它找不到返回的是-1
 	[1,4,5,-5,6].findIndex((v,i,a) => v*i>1888); //-1
 - 两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
 
	[NaN].findIndex(y => Object.is(NaN, y))//0  可以用来判断NAN
	
#fill:使用给定值，填充一个数组,数组中已有的元素，会被全部抹去。接受第二个和第三个参数，用于指定填充的起始位置和结束位置
	['a','b'].fill(7);	//[7, 7]
	['a','b'].fill(7,1,2);	//["a", 7]

#数组实例的entries()，keys()和values():—entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

	for (let index of ['a', 'b'].keys()) {
	  console.log(index);
	}
	// 0
	// 1
	
	for (let elem of ['a', 'b'].values()) {
	  console.log(elem);
	}
	// 'a'
	// 'b'
	
	for([index,element] of ['a','b','c'].entries()){
		console.log(index,element);
	}
	
	如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
	
	let letter = ['a', 'b', 'c'];
	let entries = letter.entries();
	console.log(entries.next().value); // [0, 'a']
	console.log(entries.next().value); // [1, 'b']
	console.log(entries.next().value); // [2, 'c']
	

#includes()：Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

[1,3,5].includes(2);//false
[1,3,5].includes(3);//true
 - indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相当运算符（===）进行判断，这会导致对NaN的误判。
 	[NaN].indexOf(NaN)//-1
 	[NaN].includes(NaN)//true


#函数

#函数参数的默认值:在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法,参数变量是默认声明的，所以不能用let或const再次声明

	function log(x,y="world"){
		console.log(x,y);
	}
	
	console.log('hello'); //hello
	
	函数的 length 属性
	指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
	
	(function (a) {}).length // 1
	(function (a = 5) {}).length // 0
	(function (a, b, c = 5) {}).length // 2
	上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了3个参数，其中有一个参数c指定了默认值，因此length属性等于3减去1，最后得到2。
	
	这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，rest参数也不会计入length属性。
	
	(function(...args) {}).length // 0
	如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
	
	(function (a = 0, b, c) {}).length // 0
	(function (a, b = 1, c) {}).length // 1
	
	
#rest参数:ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
	function add(a,b,...values){
	sum=0;
	for (var index of values) {
		sum+=index;
	}
	
	return console.log(sum);
	}

	add(1,2,5,1,2,2);//10

	
	// arguments变量的写法
	function sortNumbers() {
	  return Array.prototype.slice.call(arguments).sort();
	}
	
	// rest参数的写法
	const sortNumbers = (...numbers) => numbers.sort();
	
	注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
	// 报错
	function f(a, ...b, c) {
	  // ...
	}
	
	函数的length属性，不包括 rest 参数。
	(function(a) {}).length  // 1
	(function(...a) {}).length  // 0
	(function(a, ...b) {}).length  // 1
	
#扩展运算符:扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

	console.log(...[1, 2, 3])
	// 1 2 3
	console.log(1, ...[2, 3, 4], 5)
	替代数组的apply方法
	由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。
	
	// ES5的写法
	function f(x, y, z) {
	  // ...
	}
	var args = [0, 1, 2];
	f.apply(null, args);
	
	// ES6的写法
	function f(x, y, z) {
	  // ...
	}
	var args = [0, 1, 2];
	f(...args);
	
	// ES5的写法
	Math.max.apply(null, [14, 3, 77])
	
	// ES6的写法
	Math.max(...[14, 3, 77])
	
	// 等同于
	Math.max(14, 3, 77);
	
	另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。
	// ES5的写法
	var arr1 = [0, 1, 2];
	var arr2 = [3, 4, 5];
	Array.prototype.push.apply(arr1, arr2);
	
	// ES6的写法
	var arr1 = [0, 1, 2];
	var arr2 = [3, 4, 5];
	arr1.push(...arr2);
	
	
#扩展运算符的应用
 - （1）合并数组 :扩展运算符提供了数组合并的新写法。
 	var arr1 = ['a', 'b'];
	var arr2 = ['c'];
	var arr3 = ['d', 'e'];
	
	// ES5的合并数组
	arr1.concat(arr2, arr3);
	// [ 'a', 'b', 'c', 'd', 'e' ]
	
	// ES6的合并数组
	[...arr1, ...arr2, ...arr3]
	// [ 'a', 'b', 'c', 'd', 'e' ]  //高级合并
 - （2）与解构赋值结合 :扩展运算符可以与解构赋值结合起来，用于生成数组。
 	const [first, ...rest] = [1, 2, 3, 4, 5];
	first // 1
	rest  // [2, 3, 4, 5]
	
	const [first, ...rest] = [];
	first // undefined
	rest  // []:
	
	const [first, ...rest] = ["foo"];
	first  // "foo"
	rest   // []
	
	如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
	const [...butLast, last] = [1, 2, 3, 4, 5];
	// 报错
	
	const [first, ...middle, last] = [1, 2, 3, 4, 5];
	// 报错
	
 - （3）函数的返回值  ：avaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的一种变通方法。
 	var dateFields = readDateFields(database);
	var d = new Date(...dateFields);
	上面代码从数据库取出一行数据，通过扩展运算符，直接将其传入构造函数Date

 - （4）字符串 ：扩展运算符还可以将字符串转为真正的数组。
 		[...'hello']
		// [ "h", "e", "l", "l", "o" ]
		
		有一个重要的好处，那就是能够正确识别32位的Unicode字符
 		'x\uD83D\uDE80y'.length // 4
		[...'x\uD83D\uDE80y'].length // 3
		//凡是涉及到操作32位Unicode字符的函数，都有这个问题。因此，最好都用扩展运算符改写
		
 - （5）实现了Iterator接口的对象:任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
 	var nodeList = document.querySelectorAll('div');
 	
	var array = [...nodeList];
 	//querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了Iterator接口。
 	
 - （6）Map和Set结构，Generator函数	:扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符，比如Map结构。
 	
 		let map = new Map([
		  [1, 'one'],
		  [2, 'two'],
		  [3, 'three'],
		]);
		
		let arr = [...map.keys()]; // [1, 2, 3]
		
		
		
#严格模式 :只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
	// 报错
	function doSomething(a, b = a) {
	  'use strict';
	  // code
	}
	
	// 报错
	const doSomething = function ({a, b}) {
	  'use strict';
	  // code
	};
	
	// 报错
	const doSomething = (...a) => {
	  'use strict';
	  // code
	};
	
	const obj = {
	  // 报错
	  doSomething({a, b}) {
	    'use strict';
	    // code
	  }
	};
	//两种方法可以规避这种限制。第一种是设定全局性的严格模式，这是合法的。
		'use strict';

		function doSomething(a, b = a) {
		  // code
		}

	第二种是把函数包在一个无参数的立即执行函数里面。
 		const doSomething = (function () {
		  'use strict';
		  return function(value = 42) {
		    return value;
		  };
		}());
		
 - name 属性 :函数的name属性，返回该函数的函数名。
 	需要注意的是，ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。
		//第一种情况 ，不是匿名函数
		const bar = function baz() {};

		// ES5
		bar.name // "baz"
		
		// ES6
		bar.name // "baz"
		
		//第二种情况  匿名函数
		var f = function () {};

		// ES5
		f.name // ""
		
		// ES6
		f.name // "f"
		
		Function构造函数返回的函数实例，name属性的值为anonymous。
		(new Function).name // "anonymous"
 		
 		//bind返回的函数，name属性值会加上bound前缀
 		
		function foo() {};
		foo.bind({}).name // "bound foo"
		
		(function(){}).bind({}).name // "bound "
		

#箭头函数 :ES6允许使用“箭头”（=>）定义函数。
	var f = v => v;
	
	======等同于
	
	var f = function(v) {
	  return v;
	};
	
	//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
	
	var f = () => 5;
	// 等同于
	var f = function () { return 5 };
	
	var sum = (num1, num2) => num1 + num2;
	// 等同于
	var sum = function(num1, num2) {
	  return num1 + num2;
	};
	
	//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
	
	var sum = (num1, num2) => { return num1 + num2; }
	
	//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。

	var getTempItem = id => ({ id: id, name: "Temp" });
	
	const full = ({ first, last }) => first + ' ' + last;
	// 等同于
	function full(person) {
	  return person.first + ' ' + person.last;
	}
	
	//箭头函数使得表达更加简洁。
	const isEven = n => n % 2 == 0;
	const square = n => n * n;
	
	箭头函数有几个使用注意点。
	
	（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
	
	（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
	
	（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
	
	（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
	
	function foo() {
	  setTimeout(() => {
	    console.log('id:', this.id);
	  }, 100);
	}
	
	var id = 21;
	
	foo.call({ id: 42 });
	// id: 42
	
	上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
	
	this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
 
	// ES6
	function foo() {
	  setTimeout(() => {
	    console.log('id:', this.id);
	  }, 100);
	}
	
	// ES5
	function foo() {
	  var _this = this;
	
	  setTimeout(function () {
	    console.log('id:', _this.id);
	  }, 100);
	}
	
	除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
		
	function foo() {
	  setTimeout(() => {
	    console.log('args:', arguments);
	  }, 100);
	}
	
	foo(2, 4, 6, 8)
	// args: [2, 4, 6, 8]
	
#嵌套的箭头函数
	箭头函数内部，还可以再使用箭头函数。下面是一个ES5语法的多重嵌套函数
	
	function insert(value) {
	  return {into: function (array) {
	    return {after: function (afterValue) {
	      array.splice(array.indexOf(afterValue) + 1, 0, value);
	      return array;
	    }};
	  }};
	}
	insert(2).into([1, 3]).after(1); //[1, 2, 3]
	
	let insert = (value) => ({into: (array) => ({after: (afterValue) => {
	  array.splice(array.indexOf(afterValue) + 1, 0, value);
	  return array;
	}})});
	
	insert(2).into([1, 3]).after(1); //[1, 2, 3]
 

#绑定 this 
	函数绑定运算符是并排的两个双冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

	/ 例一
	import { map, takeWhile, forEach } from "iterlib";
	
	getPlayers()
	::map(x => x.character())
	::takeWhile(x => x.strength > 100)
	::forEach(x => console.log(x));
	
	// 例二
	let { find, html } = jake;
	
	document.querySelectorAll("div.myClass")
	::find("p")
	::html("hahaha");
	
	var method = obj::obj.foo;
	// 等同于
	var method = ::obj.foo;
	
	let log = ::console.log;
	// 等同于
	var log = console.log.bind(console);
	

#尾调用优化
	尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数
	
	// 情况一
	function f(x){
	  let y = g(x);
	  return y;
	}
	
	// 情况二
	function f(x){
	  return g(x) + 1;
	}
	
	// 情况三
	function f(x){
	  g(x);
	}
	
	尾调用之所以与其他调用不同，就在于它的特殊的调用位置。我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。

#尾递归

	函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
	递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

	function factorial(n) {
	  if (n === 1) return 1;
	  return n * factorial(n - 1);
	}
	
	factorial(5) // 120
	
	上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n),如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。
	 
	 function factorial(n, total) {
	  if (n === 1) return total;
	  return factorial(n - 1, n * total);
	}
	
	factorial(5, 1) // 120
	








 