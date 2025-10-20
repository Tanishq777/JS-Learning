let user = "Tanishq"

console.log(`My name is ${user}.`);

const time = new String('Morning') // it will get sotred as key-value pairs not array of chars

console.log(time[1]);
console.log(time.charAt(1));
console.log(time.indexOf('n'));

let string = "Hello World!"

console.log(string.slice(-5,3));
console.log(string.substring(1,4)); // same as slice but cant accept neg values

let random = "Hello%20 World!   "

console.log(random.trim());
console.log(random.replace('%20','-'));

let username = "tanishq-777-github"

console.log(username.split('-')); // split and put in array



