//const p1 = fetch(""); // this p1 also api's

// here we are created dummy promises for understanding

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
// after 3s  it print res

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 failed"), 1000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
// afte 1s it will print failed then it does wait for another promises

Promise.allSettled([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
//  it does wait for the all the promises it does not matter whenther promises sucess or failed. print res [suc,fal,suc]

Promise.race([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

//  we know that race method does not matter failed or success it it return first settled promises if any promises first finish it'work whether seu or fal it will return suc or fal that's it.
Promise.any([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
//  it wait for  first success promoise here p5 come first but failed so it go to the next promises that means p6 because  it takes less time then it retusn that result after 2sec

const p7 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p7 success"), 3000);
});

const p8 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p8 failed"), 1000);
});

const p9 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p9 success"), 2000);
});
Promise.any([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
//  if all failed then it return aggregate error after 3sec.
