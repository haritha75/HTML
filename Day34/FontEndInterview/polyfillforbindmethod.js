let name = {
  firstname: "haritha",
  lastname: "yerukondu",
};
let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};
let fullName = printName.bind(name, "hyderabad");
fullName("rajampet");

// i above built in method using bind right now we can create our bind method

Function.prototype.mybind = function (...args) {
  // this is an array
  let obj = this, //to access the function  printName we are using this keyword
    params = args.slice(1); //it remove from the array first element it return remaining elements first element is name refrence .
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); // here name object will be gone to the function name[0]
  }; // params and args it create one large array we will concating the values or arguments. and passing into the array.
};
// to access printname using this in above code.

let fullName1 = printName.mybind(name, "banglore"); //to access name  to so we are using args  like a array
fullName1("kadapa");
// to ahndle paramter we can handle using params
