// it depends on event bubbling
// for example in flipcart web site when click laptop it will perform action because we are applying one addevent lister even so like each individual elemnt applying event listerners
// instread of applying event listerne each individual element apply event listerner to the it's parent then it effect to the childrends right

document.querySelector("#categories").addEventListener("click", (e) => {
  console.log(e.target.id);
  window.location.href = "/" + e.target.id;
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined)
    e.target.value = e.target.value.toUpperCase();
  // here when you enter lowercase letter but it enter uppercae letters.
});

// already we see right if you click parent it will effect to child in event bubbling or capturing right same here also happends.
// we can reuse event delegation in many times for exam if you have multiple element we cannot apply to all the element to eventlistener right so that time it will help.
// it saves the memeroy because we are applying event listener to the parent and less code
// but all events not bubbling means in bubbling we see that parent elemnt calling rught if you use some event like focus it will not bubbling.
// and also using stop progation it will bubbling up already we know that it will not bubbling up to it's parent right..
