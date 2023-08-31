const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
let arr = [];
let x = null;

rl.on("line", (line) => {
  if (n === null) {
    n = parseInt(line);
  } else if (arr.length < n) {
    arr.push(...line.split(" ").map(Number));
  } else if (x === null) {
    x = parseInt(line);
    rl.close();
  }
});

rl.on("close", () => {
  const sortedArr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let answer = 0;

  while (left < right) {
    if (sortedArr[left] + sortedArr[right] === x) {
      answer++;
      left++;
      right--;
    } else if (sortedArr[left] + sortedArr[right] < x) {
      left++;
    } else {
      right--;
    }
  }

  console.log(answer);
});


// const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = require("fs")
//   .readFileSync(fileName)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => v.split(" ").map(Number));

// console.log(input);

// function solution(input) {
//   const [[n], [...arr], [x]] = input;
//   let left = 0;
//   let right = n - 1;
//   let answer = 0;

//   arr.sort((a, b) => a - b);

//   while (left !== right) {
//     if (arr[left] + arr[right] === x) {
//       answer++;
//       left++;
//       right--;
//     } //
//     else if (arr[left] + arr[right] < x) left++;
//     else right--;
//   }

//   return answer;
// }

// console.log(solution(input));
