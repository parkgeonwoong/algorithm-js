/**
 * 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
 * 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
 * 송아지는 움직이지 않고 제자리에 있다. 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 * 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하세요.
 */

function solution(start, e) {
  let answer = 0;
  let queue = [];
  let check = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0); // 처음시작을 0으로 하는 거리비교 (=레벨)

  // 시작값
  queue.push(start);
  check[start] = 1;
  distance[start] = 0;

  // BFS
  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return distance[x] + 1;

      // 중복된 값 다시탐색 X
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }

  return answer;
}

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
