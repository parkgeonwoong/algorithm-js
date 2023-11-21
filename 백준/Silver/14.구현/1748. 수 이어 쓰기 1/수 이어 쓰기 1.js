const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  let sum = 0;

  for (let i = 1; i <= input; i *= 10) {
    sum += input - i + 1;
  }
  return sum;
}

console.log(solution(input));
