// console.log("2" > 1)  // avoid such coomparisons

console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
// == behaves differently than <,>,<=,>= other comaprison operators, == typecast null to 0 then comapres other just make it NaN so false 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
// undefined is undefined type so false in ecery case

// === for strict comparisons, compares value as well as type

console.log("2" == 2);
console.log("2" === 2);
