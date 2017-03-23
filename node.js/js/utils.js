var util = require('util');

//util.isArray(object)

/*console.log(util.isArray([]))//true

console.log(util.isArray(new Array))//true

console.log(util.isArray({}));//false*/

//util.isRegExp(object)

/*console.log(util.isRegExp(/some/));//true

console.log(util.isRegExp(new RegExp('regexp')));//true

console.log(util.isRegExp({}));//false*/

//util.isDate(object)

/*console.log(util.isDate(new Date()));//true

console.log(util.isDate(Date()));//false without 'new' returns a String

console.log(util.isDate({}));//false*/

//util.isError(object)

console.log(util.isError(new Error()));//true
console.log(util.isError(new TypeError()));//true
console.log(util.isError({name:'error'}));//false




