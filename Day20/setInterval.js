
setInterval(() => {

    console.log("hello");
},1000); //without calling it automatically print after 1000sec. but it continously printing their is not stopping.

let i=0;
setInterval(() => {

    if(i==30)
       return;
    console.log("hello"+ i++);   
    
}, 10000);

//if you  do not want to calling automatically then put in to the funcion.

function  call() {
    let i=0;
setInterval(() => {

    if(i==30)
       return;
    console.log("hello1 "+ i++);   
    
}, 10000);
};

call();