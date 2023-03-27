/**
 * 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 * 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
 * 선생님이 가지고 있는 예산은 한정되어 있습니다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
 * 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.
 *
 * @로직
 * 완전탐색인데 어떻게 접근해야하는지 모르겠다.
 *
 * 모든 경우의 수를 하나먼저 할인을 받고 cnt++ 인 상태에서 시작해보자
 *
 * 1. (가격+배송비)가 오름차순 되도록 정렬
 * 2. for문 전체 순회할때 처음시작 → 예산 - (가격/2 + 배송), cnt++
 * 3. 나머지 경우의 수를 돌때 조건 j!==i 그리고 예산보다 적거나 같은 경우
 * 4. 최대학생수를 구하니까 max
 */

function solution(m, arr) {
  let answer = 0;
  const n = arr.length;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(arr);

  for (let i = 0; i < n; i++) {
    // 시작부터 할인 하나로 정하기
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;

    // 나머지 경우의 수
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
