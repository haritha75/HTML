// for example if you have nested div element if you call the child div element then it calls the parent div and then again grand parent div will be called this called bubbling
//  we knwo that also bubble also come  out so event is bubble out the dom tree
//  and even capture is oposite to the bubbling when  click even  child div it click the grand parent and after click  parent div and click chid div

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  false
); //  if you put false in this statemnt then it behavious like bubbling.
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clikced");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clikced");
  },
  false
);
// if you click here then it print and then parent print and then grand parent print  this is called bubbling
// if you click parent then it print and next it print it's parent that is grandparent .

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  true
); //  if you put true in this statemnt then it behavious like capturing.
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clikced");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clikced");
  },
  true
);
// now it working like a capture that means if you click first grandparent print after parent at last child.
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  true
); //based on the true or false parameter it depends here capturing
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clikced");
  },
  false //bubbling
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clikced");
  },
  true //capturing when click child it goes grand parent after parent right but here parent parameter is false so it will come child printing it after last print parent.
);

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  true
); //based on the true or false parameter it depends here capturing
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clikced");
  },
  false //bubbling
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clikced");
  },
  false //bubbling
);

// here what happends means when click child it's see the grandparent paramet true and printing it after see parent it is fase not print and come child it's also false but outr process completes right so it print child and after parent .

// stopping propogations

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  false
); //based on the true or false parameter it depends here bubbling
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clikced");
    e.stopPropagation();
  },
  false //bubbling
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clikced");
  },
  false //bubbling
);

//  what happend all are bbuling but we stopping programming till parent right so when click child it goes grandparent but we are stopping grandparent so it will not to grandparent it parent and see false and come to child also false then process completes so it print child after parent.

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  false
); //based on the true or false parameter it depends here bubbling
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clikced");
  },
  false //bubbling
);
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child clikced");
    e.stopPropagation();
  },
  false //bubbling
);
//  here now we stopping propagation child only it will not go for it's parent and grand parent it print child oly like this we have to stop propagation.

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clikced");
  },
  true
); //based on the true or false parameter it depends here bubbling
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clikced");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent clikced");
    e.stopPropagation();
  },
  true
);

//  all are capturing so it calling from  grand parent print it and parent print after child but it is stopping right it will not print.

// in case of capturing start from grandparent.

// Event Bubbling: Events start at the target element and bubble up through its ancestors, triggering event handlers along the way.

// Event Capturing: Events start at the root of the document and trickle down through the DOM tree to the target element,
// triggering event handlers along the way.
