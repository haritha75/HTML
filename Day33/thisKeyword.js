//  we have to types of strict or non-strict  mode

"use scrict";
//  global space is nothing outside the function and inside the function called functional scope

// this keyword in global space

console.lof(this); // whnever js runs one global object created that is called window,global in nodejs
//  so here this keyword is global object inside the global space

// this keyword inside the function

// this keyowrd inside the function based on the scrict or non-scrict jmode
// if it is a non-scrict it print undefined or null otherwise this keyword value means undefined or null replaced with the global object that is clalled window object

function x() {
  console.log(this);
  // actually here this keyword is undefined but you are using strict mode so undefined replaced with the globalobject whnever non-scrict mode
}
x(); //it shows undefined because we are using scrict mode

// this keyword vlaue depends on how the function is called(window)

// if you like this
window.x(); //it shows windows object because here we are calling with reference

//  this keyword inside objects method

const obj = {
  a: 10,
  x: function () {
    console.log(this); // this will be ference to the obj variable because current object here current object is obj

    console.log(this.a); //obj.a meaning
  },
};

obj.x();
// inside object function called method.

const student = {
  name: "haritha",
  print: function () {
    console.log(this.name);
  },
};
student.print();

const student2 = {
  name: "depika",
};
// to override the methods like this
student.print.call(student2); // here i am reuse the method but overridng that value using call method and passing object student2
//  here hwat happend sharing method to another object right so we are using this below methods to ahre the methods.
// apply ,call and blind method are used to override data.

// this keyword inside the arror function.

const obj1 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj1.x(); // now it print window object because it obj will be enclosing lexical context. so it will take global object

// this keyword inside nested arraow function.
const obj2 = {
  a: 10,
  x: () => {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x(); //it gives obj2 values

// this keyword inside dom elements  is reference to html elements.
c;
