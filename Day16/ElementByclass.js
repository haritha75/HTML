let elements=document.getElementsByClassName("myClass");

function changeText1() {

    elements[0].style.backgroundColor=changeBg(); //it apply first element.
    
    
}
function changeText2() {

    elements[1].style.backgroundColor=changeBg(); //it aplly second element.

}

let arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; //hexdecimal numbers mention in a rgb format.total 16 values.


function changeBg() {

    let color="#";

    for(let i=0;i<6;i++) {

        let randomDigit = parseInt(Math.random()*arr.length); //first we are generating random digit and multiplying with arr length and converrting into the int value

        color +=arr[randomDigit];
    }

    return color;
}