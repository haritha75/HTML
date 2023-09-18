let url='https://random.dog/woof.json';

let image= document.querySelector('img');

let button = document.querySelector('button');
button.addEventListener('click',logDog);

async function logDog() {

    const response= await fetch(url);
    const dodgDetails = await response.json();
    image.src=dodgDetails.url;

    console.log(dodgDetails);
}
