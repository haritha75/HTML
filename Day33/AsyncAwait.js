//async functions always return a promises
async function getData() {
  return "if you return a value from the async function then it will take that value and rap inside the promise and returns it";
}
// if you return promise from this function it's ok if you return value then it takes value put it to the promises and returning it.

const data = getData(); // this function return a promises and store into the variable and variable will treated as a value in javascript.
console.log(data);
//if you want get data from the promises use like this
data.then((res) => {
  console.log(res); //whatever data inside promise it print that
});

const p = new Promise((resolve, reject) => {
  resolve("promises resolved value");
});
async function getData11() {
  return p; // here direct return promise
}

const data1 = getData11(); // this function return a promises and store into the variable and variable will treated as a value in javascript.
console.log(data);
data1.then((res) => {
  console.log(res); //whatever data inside promise it print that
});

// to handle promises we are use async and awit

// without aync handle promises

function getData1() {
  p.then((res) => console.log(res));
}

getData1();

// if you have the mutilple promises then if you want get the data you are using promises changing using thenmethod it is deifficult sometime so we are using to easy understand async and await also one reason.

// with aynsch and await

// async and await  are keywords asncy used with the function and awaut is used insdie the method always

async function handlePromise() {
  const val = await p; // here to resolve the promises some time takes so we are using await keyword to resolve the promise and stored in one vairbale.use awit keyword infront of promise.
  console.log(val);
}
handlePromise();

// await is a keyword it is used inside the async function and also infront of promise.
//  basically  promises it takes some time right to complete work  it does not happends immediate that's why we are using aynch operations.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promises resolved value");
  }, 10000);
});

async function handlePromise() {
  const val = await p1; // here to resolve the promises some time takes so we are using await keyword to resolve the promise and stored in one vairbale.use awit keyword infront of promise.
  console.log(val);
}
handlePromise();

// older way of handler promises
function getData11() {
  //  js engine will not wait for promise resolve it will go to next line once promises resolve it will print.
  p1.then((res) => console.log(res));
  console.log(
    "here we are using p1 promise it takes some time because it is async operation happening in older way it does not wait right so it go to next line on that promise in pending state because because promises intially empty data after contain data it will perform actions right."
  );
}
getData11();

async function handlePromise1() {
  const val = await p1;
  console.log(
    "here what hapend is you are using await right so to resolve the promise till that time js engine wait for that promises once promise will resolve it will go to next line and one more thing function does not wait js engone only wait whever await keyword apprea on that time function will be remove or it will go out of call stack once promise resolve and again function come to call stack after it will rpint the data. "
  );
  console.log(val);
  // here wait for promise resolve once promise then it will print console  and val. basically code will be waiting for the promise to resolve.
}
handlePromise1();

async function handlePromise2() {
  console.log("hello world"); // it will print immediatly because  we donot have any promises before this line so it print immediately if promises have it will wait for that one also.
  const val = await p1;
  console.log(
    "here what hapend is you are using await right so to resolve the promise till that time js engine wait for that promises once promise will resolve it will go to next line and one more thing function does not wait js engone only wait whever await keyword apprea on that time function will be remove or it will go out of call stack once promise resolve and again function come to call stack after it will rpint the data. "
  );
  console.log(val);
  // here wait for promise resolve once promise then it will print console  and val. basically code will be waiting for the promise to resolve.
}
handlePromise2();

async function handlePromise3() {
  console.log("hello world"); // it will print immediatly because  we donot have any promises before this line so it print immediately if promises have it will wait for that one also.
  const val = await p1;
  console.log(
    "here what hapend is you are using await right so to resolve the promise till that time js engine wait for that promises once promise will resolve it will go to next line and one more thing function does not wait js engone only wait whever await keyword apprea on that time function will be remove or it will go out of call stack once promise resolve and again function come to call stack after it will rpint the data. "
  );
  console.log(val);

  const va1 = await p1;
  console.log(
    "here what happnds means  both are using same promises right so and also await is used to resolve the promises untill the code not move so once prmises resolve then it will print all once because both promises completes it's time to resolve."
  );
  console.log(val);
}
handlePromise3();

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promises resolved value");
  }, 10000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promises resolved value");
  }, 5000);
});

async function handlePromise4() {
  console.log("hello world"); // it will print immediatly because  we donot have any promises before this line so it print immediately if promises have it will wait for that one also.
  const val = await p3;
  console.log(
    "here what happening is this promise take 10 sec to resolve so await is used here till promise resolve it will not go so after time completes it will go to next await see the that promises completes time already so  it will not wait because it only 5 sec right."
  );
  console.log(val);

  const va1 = await p4;
  console.log(
    "after p3 completed and print and next come to here and check that await keyword but at that time promise will be resolved so it will print immediately."
  );
  console.log(val);
}
handlePromise4();
async function handlePromise5() {
  console.log("hello world"); // it will print immediatly because  we donot have any promises before this line so it print immediately if promises have it will wait for that one also.
  const val = await p4;
  console.log(
    "in above example it will print alll once because first promise will take more time to compare next one so on that second one also resolved we know js not waiting anything. "
  );
  console.log(val);

  const va1 = await p5;
  console.log(
    " here what happends menad p4 takes less time to resolve promises so it will print first but p5 takes 10sec right after p4 print and p5 takes to resolve the promises 10sec "
  );
  console.log(val);
}
handlePromise5();
// whenver see aait keyword the function will not wait it will suspended from the call stack at that time once resolve the promises and again continue to the next line function. because we know that js does not wait for anything

// how fetch works

const api = "http://api.github.com/users/haritha75";

async function handlePromise11() {
  try {
    const data = await fetch(api); // is is also fetch is a web api. when call the fetch api it will return promise so it takes time use awit to resolve this.fetch function  is a promise when fetch function resolve it wgives responds.
    //  afte return responds again that responds converting into json format again it is a promise  when promise resolve it gives the result.

    const res = await data.json(); //here convering data into json it will takes some time because it is a promise to get theres storing into the vairable.
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

handlePromise11();
//  also do like this

handlePromise11().catch((err) => console.log(err)); // we know that the async function return promise if error forms it will catch that error that's it.

//  aync await is the new way of handle promises and then and catch methods older way of handle promise.
