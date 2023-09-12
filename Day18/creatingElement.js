function fun() {

let heading = document.createElement('h1');
heading.innerText="Bulb";
heading.style.color="red";
document.body.appendChild(heading);

let image=document.createElement('img');
image.src="On_Bulb.jpg";
document.body.appendChild(image);
image.width='300';
image.height='300'

}