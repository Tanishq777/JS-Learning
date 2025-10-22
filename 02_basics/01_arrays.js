/*
Arrays are mutable in JS and can contain mix of data types simultaneously
Arrays are copied by reference, change in the copy reflects in the original array
*/
let myArr = [1,2,3,4,5]

console.log(myArr.includes(9)); // check presence

console.log(myArr.indexOf(4)); // gives index of element

console.log(myArr.join()); // returns a string of elemtenst separated by comma

// splice vs slice
// splice - removes that subpart from original array
// splice - prints subpart from original array without changing it

console.log(myArr.slice(0,3));
console.log(myArr);
console.log(myArr.splice(0,3));
console.log(myArr);

