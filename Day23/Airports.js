let input = document.querySelector('input');
let button = document.querySelector('#btn');



button.addEventListener('click',airportsDetails);

var options = {
    methods:'GET',
    headers: {
        "Content-Type":"application/json",
        "X-Api-key":"PxV9MtJY3FCKR/HSzZ1Jlw==MWb2NL0gjPao5xA4",
    },
};

async function airportsDetails() {
    let inputValue=input.value;
    let url=`https://api.api-ninjas.com/v1/airports?name=${inputValue}`;

    const response = await fetch(url,options);
    const airportsDetails = await response.json();

    console.log(airportsDetails);
    console.log(airportsDetails[0].name);
    console.log(airportsDetails[0].city);
    console.log(airportsDetails[0].timezone);


}