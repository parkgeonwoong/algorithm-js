/**
 * 1로 시작하는 이진트리를 넓이우선탐색해 보세요
 *
 * @설명
 * BFS는 상태트리로 최단거리를 구할때 쓰임
 * 레벨 탐색이 핵심
 */

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";

    for (let next of [v * 2, v * 2 + 1]) {
      if (next > 7) continue;
      queue.push(next);
    }
  }

  return answer;
}

console.log(solution());
