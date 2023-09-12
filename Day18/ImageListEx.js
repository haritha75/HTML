let image = document.getElementsByTagName('img')[0];

let i=1;
function next() {
    i++; 
    image.src="c"+i+".gif";
    buttondisable();
}

function prev() {
    i--; 
    image.src="c"+i+".gif";
    buttondisable();
}

function buttondisable() {

    if(i==1) {
        document.getElementById('prev').disabled=true;
    }
    else {
        document.getElementById('prev').disabled=false;

    }

    if(i==7) {
        document.getElementById('next').disabled=true;
    }
    else {
        document.getElementById('next').disabled=false;

    }
}