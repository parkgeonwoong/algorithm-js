const arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 1) {
      console.log("i, j :", i, j);
    }
  }
}
