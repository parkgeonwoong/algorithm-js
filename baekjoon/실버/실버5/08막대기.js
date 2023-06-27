/**
 * 1094
 *
 * 접근법
 * 1. dfs로 접근할려고 했으나 -> 처음에 실패 및 막대길이가 점점 줄어드니까 while문으로 쉽게 접근하자는 생각
 * 2. while문으로 푸는데 -> 변수를 너무 많이 생각해서 복잡해서 못품
 * 3. 단순하게 막대길이는 반씩 줄면서 막대길이 < 주어진 x 경우 x를 빼면서 접근
 * 4. 다시한번 dfs로 접근 -> 실패..
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(fileName).toString().trim();

console.log(input);

function solution(x) {
  let length = 64;
  let cnt = 0;

  while (x > 0) {
    if (length > x) {
      length /= 2;
    } else {
      cnt++;
      x -= length;
    }
  }
  return cnt;
}

console.log(solution(input));
