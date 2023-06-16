const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(input);

const countTimeHeight = (height, input) => {
  const [[n, m, b], ...arr] = input;
  let time = 0;
  let block = b;
  let remove = 0;
  let add = 0;

  for (let i of arr) {
    for (let j of i) {
      // 갯수 구하기
      if (j > height) {
        remove += j - height;
        block += j - height;
      } else if (j < height) {
        add += height - j;
        block -= height - j;
      }
      // 갯수에 따른 시간
      time = remove * 2 + add;
    }
  }

  if (block < 0) return [Number.MAX_SAFE_INTEGER, height];
  return [time, height];
};

function solution(input) {
  const answer = [];

  // 높이기준으로 다 따져보기
  for (let i = 256; i >= 0; i--) {
    answer.push(countTimeHeight(i, input));
  }

  // 최소시간, 최대높이 따지기
  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer[0].join(" ");
}

console.log(solution(input));
