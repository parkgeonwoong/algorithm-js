const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

function solution(input) {
  const answer = [];

  const calculate = (money) => {
    const coins = [25, 10, 5, 1];
    const change = [];

    for (let coin of coins) {
      const count = Math.floor(money / coin);
      change.push(count);
      money %= coin;
    }
    return change;
  };

  for (let x of input) {
    answer.push(calculate(x));
  }
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
