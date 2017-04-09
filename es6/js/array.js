/*
//Array.from()
let array={
	'0':'b',
	'1':'b',
	'2':'b',
	'3':'b',
	length:3
};

//es5写法
var arr1=Array.prototype.slice.call(array);
console.log(arr1);

//es6写法
var arr2=Array.from(array);
console.log(arr2);



//可以将字符串转换成数组

console.log(Array.from('i love you'));//["i", " ", "l", "o", "v", "e", " ", "y", "o", "u"]

//有第二个参数   类似Map

console.log(Array.from([1,5,3],x => x*2))  //[2, 10, 6]

//有第三个参数
	如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。

*/

/*
//Array.of()
console.log(Array.of(3,11,18)); //[3, 11, 18]

console.log(Array.of(3)); //[3]

console.log(Array.of(3).length); //1

console.log(Array.of(undefined)); //[undefined]

*/

//copyWithin()

/*
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
*/

//find()和findIndex()

[1,4,5,-5,6].find((v,i,a) => v*i<18); //1 








