
let body=document.body.children; //it means it return  html collection means direct tags in the body not return nested tags.
console.log(body);

let body1 = document.body.childNodes; //it return node list including nested tags and their element node, text all return.

for(let i=0;i<body1.length;i++) {
      console.log(body1);
}