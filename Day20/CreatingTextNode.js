let div = document.querySelector('div');

let p1= document.querySelector('#abc');

function addItem() { //call the method in console directly

    let p= document.createElement('p');
    let text = document.createTextNode("rock the world!");
    p.appendChild(text);
    //div.appendChild(p); 

    div.insertBefore(p,p1); //it means adding new text before p1 text.
}

let p2=document.querySelector('#abd');
let body=document.querySelector('body');

function removeItem() {

    p2.remove(); //it removed from the document.
    body.remove(div);


}

let btn =document.querySelector('button');

btn.addEventListener('click',() => { //whenever click button then it remove div tag in the file.

    body.removeChild(div);
});


