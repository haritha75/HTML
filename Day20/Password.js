let lowercase="abcdefghijklmnopqrstuvwxyz";
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers='0123456789';
const specialsymbols="!@#$%^&*()_+=-~`[]\{}|:;<>?/.,";

function generatePassword() {

    let lower=document.getElementById('lowercase');
    let upper=document.getElementById('uppercase');
    let number=document.getElementById('numbers');
    let special=document.getElementById('symbols');

    let len=document.getElementById('length').value;
    console.log(len);

    let characters='';
    if(lower.checked) {
        characters +=lowercase;
    }
    
    if(upper.checked) {
        characters +=uppercase;
    }

    if(number.checked) {
        characters +=numbers;
    }

    if(special.checked) {
        characters +=specialsymbols;
    }

    let password ='';

    for(let i=0;i<len;i++) {
        let randomIndex = Math.floor(Math.random()*characters.length);
        password +=characters.charAt(randomIndex);
    }

    document.getElementById('password').innerText ='Password: '+password;
    console.log(password);




}