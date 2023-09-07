let x = 9999999999999999n;

console.log(x);

let y = BigInt(1234567890123456789012345) 
console.log(y);

let x11 = Number.MAX_SAFE_INTEGER;
console.log(11);

let x2 = Number.MIN_SAFE_INTEGER;
console.log(x2);

console.log(Number.isInteger(10)); // it return if value is integer.

let x4 = BigInt(999999999999999);
console.log(typeof x4);

let x3 = 9007199254740995n;
let y3 = 9007199254740995n;
console.log(x3+y3);

let x5 = 5n;
let y5 = Number(x5) / 2; //divison using bigintegwr.

console.log(y5);

console.log(Number.isSafeInteger(10)); //big integer range -(2^53 - 1) to +(2^53 - 1).
console.log(Number.isSafeInteger(12345678901234567890)); //safe integer means if given number big integer range then it return true