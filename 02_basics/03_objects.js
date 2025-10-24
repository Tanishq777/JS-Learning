const sym = Symbol("Key1")

const user = {
    name: "Tanishq",
    [sym]: "Keys",
    "location": "india",
    age : 22
}

console.log(user.name); // not preffered
console.log(user["name"]);
console.log(user["age"]);
console.log(user[sym]);  // special syntax for symbols, otherwise they will be treated as normal variable

user.name = "User"
Object.freeze(user) // freeze the list, can not be modified further
user.name = "Mickey Mouse"
console.log(user["name"]);
  

