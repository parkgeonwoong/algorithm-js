function solution(emergency) {
  let answer = [...emergency].sort((a, b) => b - a);

  return emergency.map((item) => answer.indexOf(item) + 1);
}

solution([3, 76, 24]);
