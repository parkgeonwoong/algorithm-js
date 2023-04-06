function solution(arr) {
  let answer = 0;
  let newArr = [];

  for (let x of arr) {
    newArr.push([x[0], "start"]);
    newArr.push([x[1], "end"]);
  }

  newArr.sort((a, b) => (a[0] === b[0] ? (a[1] > b[1] ? 1 : -1) : a[0] - b[0]));

  console.log(newArr);

  let cnt = 0;
  for (let x of newArr) {
    if (x[1] === "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
