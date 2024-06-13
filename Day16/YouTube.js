let color = document.getElementsByTagName('img');
let i = 1;
function change() {
    if(i%2!=0)
        color[0].style.backgroundColor= 'blue';
    else
        color[0].style.backgroundColor='white';
    i++;
}