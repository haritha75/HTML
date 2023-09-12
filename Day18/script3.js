let image=document.getElementsByTagName('img')[0];
let btn =document.getElementsByTagName('button');
let i=0;

function bulb() {
    if(i%2==0) {
        image.setAttribute('src',"On_Bulb.jpg");
        //btn[0].innerText="ON";
    }

    i++;

}

function bulb1() {

    if(i%2!=0) {

        image.setAttribute('src',"Off_Bulb.jpg");
        //btn[1].innerText="OFF";
    }
    i++;
}