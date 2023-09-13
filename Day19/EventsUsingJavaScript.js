let prev = document.getElementById('prev');

function changeBg() {

    prev.style.backgroundColor='orange';

}

prev.addEventListener('click',changeBg); //whenver click the previous button then it call the changeBg function 

function yellowgreen() {

    prev.style.backgroundColor='yellowgreen';
    next.style.backgroundColor='green';
}

prev.addEventListener('mouseover',yellowgreen);

let next=document.getElementById('next');

function change() {

    next.style.backgroundColor='aqua';
}

next.addEventListener('mouseout',change);

function click() {
    next.style.backgroundColor='pink';
}

next.addEventListener('click',click);

next.addEventListener('mouseover',yellowgreen);