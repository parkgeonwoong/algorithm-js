function solution(gates, airlines) {
  let answer = [];
  let n = gates.length;
  // 정렬
  for (let x of gates) x.sort((a, b) => b - a);
  airlines.sort((a, b) => b - a);

  // 비교 배열 생성
  let temp = Array.from({ length: n }, () => Array(gates[0].length).fill(0));

  for (let i = 0; i < n; i++) {
    let air = [...airlines];

    for (let j = 0; j < gates[0].length; j++) {
      for (let k = 0; k < airlines.length; k++) {
        if (air[k] >= gates[i][j]) {
          air[k] -= gates[i][j];
          temp[i][j] = gates[i][j];
          break;
        }
      }
    }
  }

  // console.log(gates);
  // console.log(temp);

  for (let i = 0; i < n; i++) {
    if (gates[i].toString() === temp[i].toString()) answer.push(i + 1);
  }

  return answer.length === 0 ? [-1] : answer;
}

console.log(
  "결과: ",
  solution(
    [
      [1, 1, 5, 3],
      [2, 2, 3, 3],
      [1, 1, 4, 4],
      [1, 0, 3, 6],
      [0, 2, 5, 3],
    ],
    [3, 2, 5]
  )
);

console.log(
  "결과: ",
  solution(
    [
      [1, 1, 1, 1, 2],
      [0, 0, 0, 0, 6],
      [0, 2, 1, 1, 2],
      [2, 0, 2, 0, 2],
    ],
    [0, 2, 4]
  )
);

console.log("결과: ", solution([[3], [3], [3]], [1, 1, 1]));
