let h1=document.querySelector('h1');
function getDate() {

    let date=new Date();
    let time=date.getHours()+":"+date.getMinutes()+":"+date.getMilliseconds();
    h1.innerText=time;
    console.log(date);
}

setInterval(getDate,1000); //it automatically print the time.