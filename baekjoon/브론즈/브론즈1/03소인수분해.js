/**
 * 11653
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(require("fs").readFileSync(fileName).toString().trim());

console.log(input);

function solution(input) {
  const answer = [];

  for (let i = 2; i <= input; i++) {
    while (input % i === 0) {
      answer.push(i);
      input /= i;
    }
  }
  return answer.join("\n");
}

console.log(solution(input));
