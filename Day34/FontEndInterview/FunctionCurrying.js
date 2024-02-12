//two ways 1) bind method 2) closures.

let multiply = function (x, y) {
  console.log(x * y);
};

let multiply1 = multiply.bind(this, 2); // this is the refrence
multiply1(5);

let multiply2 = multiply.bind(this, 2, 3); // this is the refrence it gives 6 because it ignores 5 vlaues.
multiply2(5);
let multiply3 = multiply.bind(this); // this is the refrence it gives 6 because it ignores 5 vlaues.
multiply3(5, 3);

// closures

let multiply22 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mul = multiply22(2); // it return function and passing values again to that function y values is 3.
console.log(mul);
mul(3);
