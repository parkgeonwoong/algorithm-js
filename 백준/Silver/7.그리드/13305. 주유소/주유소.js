/**
 * 최소 비용을 구하는 방법은 다음과 같다.
 * 1. 현재 위치한 주유소보다 기름값이 더 저렴한 가장 가까운 주유소를 오른쪽에서 찾는다.
 * 2. 더 저렴한 주유소까지만 딱 갈 수 있는 연료를 현재 위치한 주유소에서 주유하고 그 주유소까지 간다.
 * 3. 이 과정을 반복한다.
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  const [n] = input[0];
  const distance = input[1].map((v) => BigInt(v));
  const price = input[2].map((v) => BigInt(v));

  let curPrice = price[0]; // 현재도시 주유가격
  let cost = 0n;           // 발생 비용

  for (let i = 0; i < n - 1; i++) {
    cost += distance[i] * curPrice;
    if (curPrice > price[i + 1]) curPrice = price[i + 1];
  }

  return String(cost);
}

console.log(solution(input));
