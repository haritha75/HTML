let quotes=[
    {
      id: "0",
      category: "Albert Einstein",
      body: "Life is like riding a bicycle. To keep your balance you must keep moving.",
      by: "Albert Einstein"
    },
    {
      id: "1",
      category: "Albert Einstein",
      body: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      by: "Albert Einstein"
    },
    {
      id: "2",
      category: "Albert Einstein",
      body: "No problem can be solved from the same level of consciousness that created it.",
      by: "Albert Einstein"
    },
    {
      id: "3",
      category: "Albert Einstein",
      body: "Try not to become a man of success, but rather try to become a man of value.",
      by: "Albert Einstein"
    },
    {
      id: "4",
      category: "Donald Trump",
      body: "I try to learn from the past, but I plan for the future by focusing exclusively on the present. That's where the fun is.",
      by: "Donald Trump"
    },
    {
      id: "5",
      category: "Donald Trump",
      body: "The point is that you can't be too greedy.",
      by: "Donald Trump"
    },
    {
      id: "6",
      category: "Abraham Lincoln",
      body: "My father taught me to work; he did not teach me to love it.",
      by: "Abraham Lincoln"
    },
    {
      id: "7",
      category: "Abraham Lincoln",
      body: "Common looking people are the best in the world: that is the reason the Lord makes so many of them.",
      by: "Abraham Lincoln"
    },
    {
      id: "8",
      category: "Abraham Lincoln",
      body: "How many legs does a dog have if you call the tail a leg? Four. Calling a tail a leg doesn't make it a leg.",
      by: "Abraham Lincoln"
    },
    {
      id: "9",
      category: "Abraham Lincoln",
      body: "And in the end it's not the years in your life that count. It's the life in your years.",
      by: "Abraham Lincoln"
    },   
    
   
];

let btn = document.querySelector('button');
let h1=document.querySelector('h1');
let h2=document.querySelector('h2');

btn.addEventListener('click',()=>{

    let index= Math.floor(Math.random()*quotes.length);

    h1.innerText=quotes[index].body;
    h2.innerText=quotes[index].by;

});