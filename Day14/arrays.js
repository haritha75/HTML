const person ={

    name:"haritha",
    age:21,
};


let val=[];

val[0]=person.name;
val[1]=person.age;
val[7]="color";
val[4]=34.66;

console.log(val[0]+" "+val[1]+" "+val[2]+" "+val[4]); //here valu[2] not assign then get undefined.


const fruit=["banana","applele","orange"];
console.log(fruit[2]);

const name = new Array("haritha","reddi","ramya");

console.log(name[2]);
name[0]="jhansi"; //updating first index value.
console.log(name[0]);

console.log(name); //accesing full array.

const arr={Name: "raj",age: 66};
console.log(arr.Name);

const a1=[23,67,98,12];
a1[a1.length]=99;

console.log(a1.length);
console.log(a1.sort());
console.log(typeof a1);
console.log(Array.isArray(a1));