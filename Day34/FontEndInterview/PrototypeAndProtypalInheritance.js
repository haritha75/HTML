// whenver create object in js on that time js engine create some hiden properties and methods then we can access that methods outside also
// not only object also function and variables this are come via prototype
// whenver create object in js and js engine automatically create hidden method and properties in object and attach to that object to your object that's why we are access methods.

//  if you want access that hidden method use like this arr.__proto__. and methods options show not only arr this is also one object
//  object.__proto__. not only object whenver create new one it autoamtically attached.
//  if you type in console.log like this Array.prototype this also one object
// every object have it's own prototype

let object = {
  name: "haritha",
  city: "Rajampet",
  getInfo: function () {
    console.log(this.name + " " + this.city);
  },
};

// never do this

let object2 = {
  name: "Neel",
};

object2.__proto__ = object; // object2 data will be hold object that means we are access object  data to object2.
// now we are attaching all the data to the object2 so we can accessing it.

// whnever acess the city like object2.city first it will check inside the object2 object if it not their it will go proto of object2 also not find then it go proto of the proto of the proto that means object here.
// what happends object2 inherite the object object data so it is called prototypal inheritance.
// printing object2.getInfo methods it gives Neel data because this keyword acess object2 so it's working like a method overriding in java.
// you know that first check in object2 so name avaible so name printed neel after it check city it is not therir it goes prototype of object2 not their it goes proto of prototype that is object so it print rajampet.

//in previous we are implemnting mybind method like this

Function.prototype.mybind = function () {
  console.log(
    "it  means we are setting mybind method to prototype of function now we can access  mybind method because we are ataching all the methods to the mybind right."
  );
};
function fun() {
  // we can access like this also fun.__proto__.mybind() or fun.mybind()
}
