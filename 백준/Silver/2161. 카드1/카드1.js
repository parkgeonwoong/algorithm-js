const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

function solution(input) {
  const answer = [];
  const queue = Array.from({ length: input }, (_, i) => i + 1);

  while (queue.length > 1) {
    answer.push(queue.shift());
    queue.push(queue.shift());
  }

  if (queue.length === 1) {
    answer.push(queue.shift());
  }

  return answer.join(" ");
}

console.log(solution(input));