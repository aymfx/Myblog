/*
 Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。*/

/*let arrayLike = {
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
*/

//常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

//NodeList

/*let ps=document.querySelectorAll('p');
Array.from(ps).forEach(function(p,s){
	console.log(p.innerHTML,s);
})*/

//函数

/*function add(){
	Array.from(arguments).forEach(function(p,s){
		console.log(p,s);
	})
}

add(1,2,0,2);*/

//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
/*Array.from('hello').forEach(function(s){
	console.log(s);
})*/

//所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。


//箭头函数   返回值两次
/*const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();*/

function toArray(){
	return [].slice.call(Array.from ? Array.from : obj);
}






