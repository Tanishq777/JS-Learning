const arr1 = ["apple", "banana", "orange"]
const arr2 = ["Carrot", "Potato", "Onion"]

//console.log(arr1.push(arr2)); // array in array, modifies org array
console.log(arr1.concat(arr2)); // merge correctly

const allItems = [...arr1, ...arr2]
console.log(allItems);

const complex_arr = [1,2,[3,4],5,6,[7,[8,9,[10,11]]]]


console.log(complex_arr.flat(2))
console.log(complex_arr.flat(Infinity)) // accepts at which depth of array to flatten

console.log(Array.from("Hello")); // convert data into arrays
console.log(Array.of(1,2,3,4));
console.log(Array.isArray("string"));

