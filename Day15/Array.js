let arr=["haritha","mock","rock"];

console.log(arr.length);
console.log(arr.toString());//it makes all words in to a string.
console.log(arr.join(" *")); //it joins words with the mentioning symbol into a string.
console.log(arr);
console.log(arr.pop()); //it remove the last element and return it.
let a=arr.push("jock"); //it insert the elment at end of the array.
console.log(arr);

console.log(arr.shift()); //it return  first index.
console.log(arr.unshift("banana")); //it add element at first 
console.log(arr);
delete arr[1]; //it print undefined but not reduce the length.
console.log(arr[1]);

let a2=["apple","orange"];
console.log(arr.concat(a2)); // it combine the both arrays.

let a3=[
    [2,3],
    [5,7],
    [9,0]
];

console.log(a3.flat()); //this methods print all elements in one array.

let a4=["apple","oranges","kiwi","mango"];

console.log(a4.splice(1,2,"banana")); //it add at 1 index banana and remove two elements after adding the banana.it print removing two elements.
console.log(a4); //after removing two elements apple,banana and mango will be printed.
console.log(a4.splice(0,2)); //The first parameter (0) defines the position where new elements should be added.second paramter specifies at what index to remove the elements.
console.log(a4.splice(1)); //it remove the element   from 1 1index to last.


let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3)); //like java subsrtring it works.

console.log(fruits.slice(2));
 