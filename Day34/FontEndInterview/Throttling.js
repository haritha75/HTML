const expensive = () => {
  console.log("expensive");
};

const throttling = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      // Invoke the function at the leading edge
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttling(expensive, 100); // Limit set to 100ms

window.addEventListener("resize", betterExpensive);

// why we are using this means every time resizing the window then function call happening right that time perforamnce is reduces so that's why we are using throttling concept now only whenver 100ms
// completes on that only it will called the function that's it.
