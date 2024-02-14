let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)(4)());

// arraow function with sum

let sum1 = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};
console.log(sum1(1)(2)(3)(4)());

// another method
let sum3 = (a) => (b) => b ? sum(a + b) : a;
console.log(sum3(1)(2)(3)(4)());
