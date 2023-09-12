let image=document.getElementsByTagName('img')[0];
let btn =document.getElementsByTagName('button')[0];
let i=0;

function bulb() {
    if(i%2==0) {
        image.setAttribute('src',"On_Bulb.jpg");
        btn.innerText="ON";
    }
    else {

        image.setAttribute('src',"Off_Bulb.jpg");
        btn.innerText="OFF";
    }
    i++;

}