const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  let sum = arr.reduce((acc, v) => acc + v, 0);
  let answer = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(arr); // 20 7 23 19 10 8 13
console.log();
