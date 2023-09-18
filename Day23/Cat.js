let url=" https://api.thecatapi.com/v1/images/search?api_key=live_77sorIGuYvvyO4zFJn3s6Xikxf2psEjnOhap5JQvY3W2BsQWgGudiMXuDeeWWz6N";

let image=document.querySelector('img');

let button=document.querySelector('#button');
button.addEventListener('click',logCat);

async function logCat() {


    const response = await fetch(url); //here we are fetching the data .it takes time for teching the data that's why we are writting await because all the data feching unitll wait 
    const catDetails = await response.json(); //response data converting into json
    image.src=catDetails[0].url;

    console.log(catDetails);
    console.log(catDetails[0].url)
}