const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

function solution(input) {
  const [N, M] = input.shift();
  const site = new Map([...input.slice(0, N)]);
  const search = [...input.slice(N)];
  const answer = [];

  for (const x of search) {
    if (site.has(x[0])) {
      answer.push(site.get(x[0]));
    }
  }
  return answer.join("\n");
}

console.log(solution(input));