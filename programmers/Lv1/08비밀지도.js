function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const arr1Binary = arr1[i].toString(2).padStart(n, "0");
    const arr2Binary = arr2[i].toString(2).padStart(n, "0");
    let temp = "";

    for (let j = 0; j < n; j++) {
      if (+arr1Binary[j] === 0 && +arr2Binary[j] === 0) {
        temp += " ";
      } else {
        temp += "#";
      }
    }
    answer.push(temp);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
