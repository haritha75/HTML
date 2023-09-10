let heading=document.getElementById("head1"); //it apply only which id is head1.

function changeText1() {

    heading.innerHTML="mouse over";
    heading.style.backgroundColor=changeBg();

}
function changeText2() {

    heading.innerHTML="mouse out";
    heading.style.backgroundColor=changeBg();
    

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