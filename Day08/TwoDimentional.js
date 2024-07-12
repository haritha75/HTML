let twoDimArray = [
  [3, 5, 1],
  [9, 4, 7],
  [2, 8, 6],
];

let n = twoDimArray.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (twoDimArray[j][0] < twoDimArray[j + 1][0]) {
      let temp = twoDimArray[j];
      twoDimArray[j] = twoDimArray[j + 1];
      twoDimArray[j + 1] = temp;
    }
  }
}

for (let i = 0; i < twoDimArray.length; i++) {
  console.log(twoDimArray[i]);
}
