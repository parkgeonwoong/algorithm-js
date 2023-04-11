function solution(start, e) {
  let answer = 0;
  let queue = [];
  let check = Array.from({ length: 10001 }, () => 0);
  let Level = 0;

  // 시작값
  queue.push(start);
  check[start] = 1;

  // BFS
  while (queue.length) {
    let len = queue.length;

    // Level 할때는 같은 레벨전체가 다 끝나야 하기 때문에
    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return Level + 1;

        // 중복된 값 다시탐색 X
        if (nx > 0 && nx <= 10000 && check[nx] === 0) {
          check[nx] = 1;
          queue.push(nx);
        }
      }
    }
    Level++;
  }

  return answer;
}
console.log(solution(5, 14));
