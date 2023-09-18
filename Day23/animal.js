let input = document.querySelector('input');

let button = document.querySelector('#button');

button.addEventListener('click',logAnimalDetails);

var options = {
    methods:'GET',
    headers: {
        "Content-Type":"application/json",
        "X-Api-key":"PxV9MtJY3FCKR/HSzZ1Jlw==MWb2NL0gjPao5xA4",
    },
};

async function logAnimalDetails() {
    let inputValue=input.value;
    let url=`https://api.api-ninjas.com/v1/animals?name=${inputValue}`;

    const response = await fetch(url,options);
    const animalDetails = await response.json();

    console.log(animalDetails);
}