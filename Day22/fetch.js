let fetchRes=fetch('https://jsonplaceholder.typicode.com/todos/1');

fetchRes.then((res) => res.json()).then((d)=>{
    console.log(d);
});