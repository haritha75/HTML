let elements = document.getElementsByTagName("h1"); //it means it collect all h1 elements into array.

console.log(elements);

console.log(elements[0]); //it print first h1 element inclusing the tags also 
console.log(elements[0].innerText) //if you want only text mention innertext or innderHTML

elements[0].innerText= "catRock" ; //if you want change text then use like this.
console.log(elements[0].innerText);


function change() {

    elements[1].innerHTML ="whenever click this element it change the text";
}


let i=1;

function change2() {

    if(i%2==0) {
        elements[2].innerHTML="hello "+i;
        elements[2].style.backgroundColor="orange";
        elements[2].style.color="black";
    }

    else {

        elements[2].innerHTML="hello world "+i;
        elements[2].style.backgroundColor="purple";
        elements[2].style.color="white";
    }
    i++;
}