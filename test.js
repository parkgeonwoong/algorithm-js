function solution(num, total) {
  let answer = [];
  const start = ((2 * total) / num - num + 1) / 2;

  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}

// solution(3, 12);
// solution(5, 15);
// solution(4, 14);
// solution(5, 5);
solution(5, 0);
