function solution(str, t) {
  let answer = [];
  let p = 1000;
  const n = str.length;

  // 좌 -> 우
  for (let i = 0; i < n; i++) {
    if (str[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  // 우 -> 좌
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === t) p = 0;
    else {
      p++;
      if (answer[i] > p) answer[i] = p;
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
