const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function getCircleDistance(p1, p2) {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

function circleRelation(d, r1, r2) {
  const sum = (r1 + r2) ** 2;
  const diff = (r1 - r2) ** 2;

  // [무수히 많은 경우]
  if (d === 0) {
    if (r1 === r2) return -1; // 원이 같음
    else return 0; // 동심원
  } else {
    // [만나지 않는 경우] : 외부, 내부
    if (d > sum || d < diff) {
      return 0;
    }
    // [한점에서 만나는 경우] : 외접, 내접
    else if (d === sum || d === diff) {
      return 1;
    }
    // [두점에서 만나는 경우] : 겹침
    else if (d < sum) {
      return 2;
    }
  }
}

function solution(input) {
  const [T] = input.shift();
  const answer = [];

  for (let i = 0; i < T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i];
    const p1 = { x: x1, y: y1 };
    const p2 = { x: x2, y: y2 };

    const d = getCircleDistance(p1, p2);
    answer.push(circleRelation(d, r1, r2));
  }
  return answer.join("\n");
}

console.log(solution(input));
