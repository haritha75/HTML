//tag method
let htmlCollection = document.getElementsByTagName('button');

console.log(htmlCollection.length);
//class method
let myclass = document.getElementsByClassName('myClass');

console.log(myclass.length);

//childProperty

let child = document.body.children; //whatever in body all the tags are child tag to the body tag that tags are collecting.

for(let i=0;i<child.length;i++) {

    console.log(child[i]);

}

console.log(child.item(2));
console.log(child.namedItem('play')); 
console.log(child.namedItem('next'));