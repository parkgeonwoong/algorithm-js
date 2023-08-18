const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [n, ...arr] = input;
  const clothes = [];
  const answer = [];

  // 테스트케이스 나누기
  for (let i of arr) {
    if (i.includes(" ")) {
      const temp = i.split(" ");
      clothes[clothes.length - 1].push(temp);
    } else {
      clothes.push([]);
    }
  }

  // 각 테스트케이스 obj 변환
  clothes.forEach((arr) => {
    const cloth = {};
    arr.forEach((v) => {
      cloth[v[1]] = cloth[v[1]] + 1 || 1;
    });

    const clothArr = Object.entries(cloth);
    if (clothArr.length === 1) answer.push(clothArr[0][1]);
    else {
      // cur[1] + 1 = 해당 의상 종류를 선택하지 않는 경우를 포함한 조합의 수
      // 전체 -1 = 아무 의상도 입지 않는 경우
      answer.push(clothArr.reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1);
    }
  });

  return answer.join('\n');
}

console.log(solution(input));
