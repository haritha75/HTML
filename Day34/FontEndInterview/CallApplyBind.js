let name = {
  firstname: "haritha",
  lastname: "yerukondu",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printFullName();
let name1 = {
  firstname: "hari",
  lastname: "yerukondu",
};
// function borrowing
name.printFullName.call(name1); // now this will be refernce to the name1
// we can share the one method data to another method to overriding.

//  we can do like this also

let name2 = {
  firstname: "haritha",
  lastname: "yerukondu",
};
//  you can right seperately

let printFullName = function () {
  console.log(this.firstname + " " + this.lastname);
};

printFullName.call(name2); // here we calling that function and passing reference as a name2 so this will be name2

let name3 = {
  firstname: "haritha",
  lastname: "yerukondu",
};

printFullName.call(name3);

// to override the data to one function to another function using call method.

// if you have more parameter use ike this

let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};

printName.call(name3, "hyderabad", "AP");

// apply method only difference is way of calling

printName.apply(name3, ["chennai", "TamilNadu"]); // here we are passing values as array tht's it.

// bind method is like a call method but we canot directly invoked.
//  because first it bind the method or copy the method and storing in to the one variable and it return a function or method  and storingi into one variablewhenver calling that  variable it return result.

let fullName = printName.bind(name3, "hyderabd", "AP");

console.log(fullName); //it print whole function.
fullName(); // it return data inside the function.
// most is used to make copy and storing process.
// we cannot invoked directly so it will exact copy of a method sotring into varibale and calling lateral.
