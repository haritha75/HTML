const cart = ["shoes", "pants", "kurts"];

const promise = createOrder(cart); // here we are creating api and calling that api it return promise and storing into that

console.log(promise);
promise
  .then(function (orderId) {
    // here we are attaching callback function to promise whenever data filled in promise then automatically execute this one
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    //it handle any error
    // it is used whenever promise reject it shows erros in red colour if you donot want that use like this.this catch block check top of the functions only.remaining all executed.
    console.log(err.message); // it handles the rejection
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // it also api amd it returns promise whatever previous function passed data it will come to this function
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo); //here previous function proceedtopayment method return the data and pritnting it.
  });

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    //here we are creating promise and return that promise
    if (!validCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "1234";

    if (orderId) {
      setTimeout(function () {
        resolve(orderId); //here whatever we are passing it will go to the callback function and it prints. here resolve takes 5 secs after 5 sec it print the datas
      }, 5000);
    }
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successfull");
  });
}

function validCart(cart) {
  return true;
}
