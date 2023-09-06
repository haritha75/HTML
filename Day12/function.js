function hello(a,b) {
    console.log("nock");

    return a+b;
}

let first=10,second=3;

let x= hello(first,second);
console.log(x); //it print return value in the function


function hi() {
    console.log("function without parameter");
}
hi();