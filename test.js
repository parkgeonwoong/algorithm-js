function solution(arr) {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  // 기준 for문
  for (let i = 0; i < n; i++) {
    // 비교 for문
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i] += 1;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
