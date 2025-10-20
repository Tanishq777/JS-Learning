let num = new Number(100) // we get some functions to apple on it, this way 

console.log(num)

console.log(num.toString());
console.log(num.toFixed(2)); // after decimal precision

const num2 = 97.738

console.log(num2.toPrecision(3)); // number of total digits to prcise

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.round(4.3));
console.log(Math.max(7,5,8,43,1,7,8,34));

// Math.random() gives a random number between 0 and 1
// to get a random number in our range, say, 10-20
const max = 20, min = 10
const randomNum = Math.floor(Math.random() * (max-min +1)) + min   
// floor to avoid the decimal value, multiplied to convert 0-1 range to max-min, added min to add where this range starts from
console.log(randomNum)




