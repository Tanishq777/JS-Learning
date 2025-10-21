let date = new Date()
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toString());
console.log(typeof date);

// let createdDate = new Date(2023,0,23)
// let createdDate = new Date("2023-01-14")
let createdDate = new Date("01-14-2023")

let timestamp = Date.now() // from default date 1st jan 1970, calculate total millisecond passed
console.log(Math.floor(timestamp/1000)); // to get in secs





