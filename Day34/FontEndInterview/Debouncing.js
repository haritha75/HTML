// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
//that it stalls the performance of the web page. In other words,
//it limits the rate at which a function gets invoked. Debouncing in JavaScript is a practice used to improve browser performance.
// it limit the function invocation whnever enter the data fastly in search bar it does not take more function calls only when enter late data on that time will greater the delay then invocation will be happends.
let count = 0;
const getData = () => {
  //it calls api and get the data
  console.log("fetching data..." + count);
};
const debounce = function (fun, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};
//  debounce takes to arguments one is functiona and other one is delay debounce function does not make calls again and again only it calls when diffrence between time interval two functions calls is greater than this delay.
// that means wnever enter the character one by one fastly it will not call because time is not complete if you enter lately then time will completes or takes so it will call that time only.
let betterFunction = debounce(getData, 300);

// whever type the character in keyword it will call that betterFunction and it sotres  copy of a function
