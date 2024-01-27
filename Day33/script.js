// set time out using var
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // always print 6 because  function-level scope  All callbacks share the same 'i' from the function scope
//     }, i * 1000);
//   }
//   console.log("javascript");
// }
// x();

// // set timeout using let
function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // always print new because let variable every time takes new values because of  let has  a block-level scope
    }, i * 1000);
  }
  console.log("javascript");
}
y();

// // set time out using let  and clouser
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(i); // always print 6
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("javascript");
// }
// x();
