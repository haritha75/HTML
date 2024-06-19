const cart = ["shoes", "pants", "kurts"];

const promise = createOrder(cart);

console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    if (orderId) {
      return proceedToPayment(orderId);
    }
  })
  .then(function (paymentInfo) {
    if (paymentInfo) {
      console.log(paymentInfo);
      return showOrderSummary(paymentInfo);
    }
  })
  .then(function (summary) {
    if (summary) {
      console.log(summary);
      return checkBalance();
    }
  })
  .then(function (balanceInfo) {
    if (balanceInfo && balanceInfo.sufficient) {
      return updateWalletBalance(balanceInfo.newBalance, -10); // Example: deduct 10 units
    } else {
      throw new Error("Insufficient balance to update wallet.");
    }
  })
  .then(function (updateInfo) {
    if (updateInfo) {
      console.log(updateInfo);
    }
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "1234";

    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Order summary shown");
    }, 3000);
  });
}

function checkBalance() {
  return new Promise(function (resolve, reject) {
    const balance = 100; // Example balance
    const cost = 50; // Example cost

    setTimeout(function () {
      if (balance >= cost) {
        resolve({ sufficient: true, newBalance: balance - cost });
      } else {
        resolve({ sufficient: false, newBalance: balance });
      }
    }, 2000);
  });
}

function updateWalletBalance(previousBalance, amount) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const newBalance = previousBalance + amount;
      resolve(`Wallet balance updated. New balance: ${newBalance}`);
    }, 2000);
  });
}

function validCart(cart) {
  return true;
}
