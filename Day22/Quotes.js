let quotes = [

    {
        quote:"The best time to plant a tree was 20 years ago. The second best time is now.",
        author:"Chinese Proverb"
    },
    {
        quote:"An unexamined life is not worth living.",
        author:"Socrates"
    },
    {
        quote:"Eighty percent of success is showing up.",
        author:"Woody Allen"
    },
    {
        quote:"Your time is limited, so don’t waste it living someone else’s life.",
        author:"Steve Jobs"
    },
    {
        quote:"Winning isn’t everything, but wanting to win is.",
        author:"Vince Lombardi"
    },
    {
        quote:"I am not a product of my circumstances. I am a product of my decisions.",
        author:"Stephen Covey"
    },
    {
        quote:"Every child is an artist.  The problem is how to remain an artist once he grows up.",
        author:"Pablo Picasso"
    },
];


let btn = document.querySelector('button');
let h1=document.querySelector('h1');
let h2=document.querySelector('h2');

btn.addEventListener('click',()=>{

    let index= Math.floor(Math.random()*quotes.length);

    h1.innerText=quotes[index].quote;
    h2.innerText=quotes[index].author;

});