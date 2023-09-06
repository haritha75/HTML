function hello(a, b) {
    let a1 = prompt("Enter a value");
    let b1 = prompt("Enter b value");
    let c1 = prompt("Enter c value");

    let res = a1 * b1 * c1;

    alert("Answer is " + res);
    console.log(res);

    return res; // Return the result
}

let first = 5;
let second = 5;

let x = hello(first, second);

console.log(x);
