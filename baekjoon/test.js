const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(input) {
  return input % 2 === 0 ? "CY" : "SK";
}

console.log(solution(input));
