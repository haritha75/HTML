let x = new Number(500);
let y = new Number(500);


console.log(x===y); //false because both are pointing  to the diifferent objects or address.objects cannot be compared:
console.log(x==y);

let x1 = 500;
let y1 = new Number(500);


console.log(x1===y1); //false it check exact both pointing same object or not

console.log(x1==y1); //true it check both numbers same or not.

let x3 = 3.14;    // A number with decimals
let y3 = 3;       // A number without decimals 


console.log(x3+y3);

let x4 = (0.2 * 10 + 0.1 * 10) / 10;

console.log(x4);

let x5 = 10;
let y5 = 20;
console.log(x5+y5);



let x6 = "10";
let y6 = "20";
console.log(x6+y6);

let x7 = 10;
let y7 = "20";
console.log(x7+y7);

let x8 = 10;
let y8 = 20;
let z8 = "30";
console.log(x7+y8+z8);

let x9 = "100";
let y9 = "10";
console.log( x9 / y9);
console.log( x9 * y9);
console.log( x9 - y9);
console.log( x9 + y9);

let x11 = 100 / "Apple";

console.log(x11); //not a number