const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  let [[start, end]] = input;
  let cnt = 0;

  while (true) {
    if (start === end) {
      break;
    } else if (end < start) {
      return -1;
    }

    if (end % 2 === 0) {
      end /= 2;
    } else if (end % 2 === 1) {
      if (String(end).endsWith("1")) {
        let StringEnd = String(end);
        StringEnd = StringEnd.slice(0, -1);
        end = Number(StringEnd);
      } else {
        return -1;
      }
    }
    cnt++;
  }

  return cnt + 1;
}

console.log(solution(input));
