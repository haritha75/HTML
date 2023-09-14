setTimeout(() => {
    console.log("hello");
},1000); //after 1000sec it print hello.



setTimeout(() => {
    let i=1;
    setInterval(()=>{
        if(i==20)
          return;
        console.log("hello ")+i;
        i++;

    },1000);
},1000);  //after 1000 sec then setinterval will print hello every 1000 sec continously if you sopping then mention some condition..

