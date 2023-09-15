let cityName='hyderabad';
let city=document.querySelector('input');

let url=" https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ee52facc2defac4e1cf365af45ab9f8a";

let btn=document.querySelector('#btn');
btn.addEventListener('click',logWeather);

async function logWeather() {

    cityName=city.value;
    let url2='https://api.openweathermap.org/data/2.5/weather?q=London&appid=ee52facc2defac4e1cf365af45ab9f8a';

    const response = await fetch(url2); //here we are fetching the data .it takes time for teching the data that's why we are writting await because all the data feching unitll wait 
    const weather = await response.json();

    console.log(weather);
}