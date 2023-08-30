const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString().trim();

function solution(s) {
  let answer = "";
  const reg = /<[a-z\s]+>|[a-z0-9]+/g;

  answer = s.replace(reg, (word) => {
    return word.startsWith("<") ? word : word.split("").reverse().join("");
  });

  return answer;
}

console.log(solution(input));
