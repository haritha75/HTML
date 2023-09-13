let prev=document.querySelector('.myClass'); //it is nothing but it select only first element,means if you have two myclass names tags then it applyed only first tag.

prev.addEventListener('click',() => {

    console.log("clicked me!");
});


let val=document.querySelectorAll('button')[1]; //it means it applyed all buttons tags.but you mention which button you want.

val.addEventListener('mouseover',() => {

    console.log("clicked me!");

    
});