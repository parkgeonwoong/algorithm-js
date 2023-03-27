/**
 * 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다.
 * 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다.
 * 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.
 * 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값은 22입니다.
 *
 * @내가푼방법
 * 각각의 카드 중복될 수 있기 때문에 전체 없는 경우의 수까지 포함 → 사실 비효율적
 *
 * @로직
 * - 다음 for문을 순회할때 다음것으로 해도 됨 왜냐하면 어차피 중복되는것
 */

// 내가 푼방법
function solution(n, k, card) {
  let answer = [];
  let box = [];

  for (let i = 0; i < n; i++) {
    const first = card[i];

    for (let j = 0; j < n; j++) {
      if (j !== i) {
        const second = card[j];

        for (let k = 0; k < n; k++) {
          if (k !== j && k !== i) {
            const third = card[k];
            box.push(first + second + third);
          }
        }
      }
    }
  }
  box.sort((a, b) => b - a);
  answer = box.filter((v, i) => box.indexOf(v) === i);

  return answer[k - 1];
}

// 효율적인 방법
function solution(n, k, card) {
  let set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(card[i] + card[j] + card[k]);
      }
    }
  }

  const answer = Array.from(set).sort((a, b) => b - a);
  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(10, 3, arr));
