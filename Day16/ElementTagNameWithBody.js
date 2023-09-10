let body = document.getElementsByTagName("body")[0]; //it means in body first element


let arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; //hexdecimal numbers mention in a rgb format.total 16 values.


function changeBg() {

    let color="#";

    for(let i=0;i<6;i++) {

        let randomDigit = parseInt(Math.random()*arr.length); //first we are generating random digit and multiplying with arr length and converrting into the int value

        color +=arr[randomDigit];
    }

    body.style.backgroundColor=color;

    console.log(color);
}