/**
 * 5575
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

function solution(time) {
  let answer = [];

  for (let x of time) {
    let [sh, sm, ss, eh, em, es] = x;
    let h = (m = s = 0);

    if (es - ss < 0) {
      s = 60 + es - ss;
      em -= 1;
    } else s = es - ss;

    if (em - sm < 0) {
      m = 60 + em - sm;
      eh -= 1;
    } else m = em - sm;

    h = eh - sh;
    answer.push([h, m, s]);
  }
  return answer.map((v) => v.join(" ")).join("\n");
}

// 다른 사람풀이
function solution(time) {
  let answer = [];
  for (let x of time) {
    const [h1, m1, s1, h2, m2, s2] = x;
    const sec1 = h1 * 3600 + m1 * 60 + s1;
    const sec2 = h2 * 3600 + m2 * 60 + s2;
    const t = sec2 - sec1;

    answer.push(
      Math.floor(t / 3600) + " " + Math.floor((t % 3600) / 60) + " " + (t % 60)
    );
  }
  return answer.join("\n");
}

console.log(solution(input));
