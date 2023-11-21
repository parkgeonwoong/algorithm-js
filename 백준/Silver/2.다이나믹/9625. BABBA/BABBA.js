const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  const a = [0, 1];
  const b = [1, 1];

  for (let i = 2; i <= input; i++) {
    a[i] = b[i - 1];
    b[i] = a[i - 1] + b[i - 1];
  }

  return [a[input - 1], b[input - 1]].join(" ");
}

console.log(solution(input));