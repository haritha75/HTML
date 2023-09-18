let input = document.querySelector('input');
let button = document.querySelector('#btn');



button.addEventListener('click',logEmojiDetails);

var options = {
    methods:'GET',
    headers: {
        "Content-Type":"application/json",
        "X-Api-key":"PxV9MtJY3FCKR/HSzZ1Jlw==MWb2NL0gjPao5xA4",
    },
};

async function logEmojiDetails() {
    let inputValue=input.value;
    let url=`https://api.api-ninjas.com/v1/animals?name=${inputValue}`;

    const response = await fetch(url,options);
    const emojiDetails = await response.json();

    console.log(emojiDetails[0].taxonomy);
    console.log(emojiDetails[0].locations);


}