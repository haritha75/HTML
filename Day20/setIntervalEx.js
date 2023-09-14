
let i=40;

let div=document.querySelector('div');

function call() {

    setInterval(() => {
        if(i==1000)
          return;
        div.style.margin=i+"px"; 
        i +=20; 
    },1000);
};

call();