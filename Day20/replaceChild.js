let parent = document.querySelector('body');

let child=document.querySelector('#world');

let h1=document.createElement('h1');
let text=document.createTextNode("hello guys!");
h1.appendChild(text);


let btn = document.querySelector('button');

btn.addEventListener('click',() => {
      
    parent.replaceChild(h1,child); //here we are replacing the p tag means child to h1 tag


});
