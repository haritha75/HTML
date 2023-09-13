//function declaration

function hello() {

    console.log("hello");
};

//function expression

const hi=function(){ //hi is the function name 

    console.log(9+6);

};

//arrow function
const sum = (a,b) => a + b; //like lambda expression in java

const sum1= () => console.log("hi...");

const val = a => console.log(a+10); //if you have one statement then write like this.call like this val(4)

const del= (b) => {
    console.log("hey...");
    console.log("hi everyone....!");
};

