let image = document.getElementsByTagName('img')[0];

let i=1;
function next() {
    i++; 
    image.src=i+".png";
    buttondisable();
}

function prev() {
    i--; 
    image.src=i+".png";
    buttondisable();
}

function buttondisable() {

    if(i==1) {
        document.getElementById('prev').disabled=true;
    }
    else {
        document.getElementById('prev').disabled=false;

    }

    if(i==8) {
        document.getElementById('next').disabled=true;
    }
    else {
        document.getElementById('next').disabled=false;

    }
}