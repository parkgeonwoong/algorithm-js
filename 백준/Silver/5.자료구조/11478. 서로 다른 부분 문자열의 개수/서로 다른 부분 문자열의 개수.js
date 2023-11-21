const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim().split("");

function solution(input) {
  const n = input.length;
  const set = new Set();

  for (let i = 0; i < n; i++) {
    let next = i + 1;
    let temp = input[i];

    if (!set.has(input[i])) set.add(input[i]);

    while (next < n) {
      temp += input[next++];

      if (!set.has(temp)) {
        set.add(temp);
      }
    }
  }
  return [...set].length;
}

console.log(solution(input));
