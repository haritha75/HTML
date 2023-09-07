let str=`haritha , "hello"`; //we can use both single and double quotes in the templete literals

console.log(str);



let s= `haritha
hello
evrerykone

javascript`;
console.log(s); //it allows multiple lines


let a=45;
let b=23;

console.log(`a = ${a} b = ${b+2}`); //${} = value in double quotes we have some confusion for this one their is no cnfusion.


let name=`haritha`;
let age=22;

console.log(`my name is ${name} and i am ${age} years old`);
console.log(`my name is ${name.toUpperCase()} and i am ${age} years old`);

function hello() {
    return "haritha";

}


console.log(`hi everyone this is ${hello()}`);