const arr = [25, 23, 11, 47, 53, 17, 33];
const arr2 = [12, 20, 54, 30, 87, 91, 30];

function solution(day, arr) {
  let answer = 0;

  for (let i of arr) {
    const result = String(i).slice(1, 2);
    if (day === Number(result)) answer += 1;
  }

  return answer;
}

console.log(solution(0, arr2));
