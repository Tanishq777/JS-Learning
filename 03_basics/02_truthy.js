// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??) : to check for null and undefined
let val = null ?? 10; //10
val = undefined ?? 5; //5
val = null ?? 10 ?? 20; //10
