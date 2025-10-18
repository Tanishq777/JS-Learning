//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // either float or int both number data type

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions, all have type of Object, just function has type of object function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// Stack Memory saves primitive data types, directly gives copy of datatype
// Heap Memory saves all Non-primitive data types, gives reference of datatype

let a = 3
let b = a
b = 4

console.log(a);
console.log(b);

let arr = [1,2,3]
let brr = arr
brr[1] = 0

console.log(arr[1]);
console.log(brr[1]);



