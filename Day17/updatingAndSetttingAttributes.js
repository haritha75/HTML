function hello() {

    let heading= document.getElementsByTagName("h1")[0];

    heading.title="rock";
}
let i=0;

function fun() {

    let image=document.getElementsByTagName("img")[0];
    if(i%2==0)

      image.width='100';
    else 
      image.width='500';

    i++;  


}

function fun1() {

    let image1=document.getElementsByTagName('img')[1];
    image1.src="./500720.jpg";
    image1.width="500";
    image1.alt="wall paper for laps";

}

function fun2() {

    let image3=document.getElementsByTagName('img')[2];
    image3.setAttribute('alt',"hello");
}