/**
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
 * 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
 *
 * @내가푼방법 (틀림)
 * - 새로운 배열을 갯수만큼 만들어서 비교할려고 했으나 로직이 꼬여버려서 구현할 수 없었다.
 * - 어떻게 비교를 해야할지 도저히 알 수 없었다.
 *
 * @로직
 * 완전탐색문제로, 16가지 다 확인해봐야겠다.
 * 1. 이중 for문으로 (멘토, 멘티) 모든 경우의 수 만듬
 * 2. 또 이중 for문으로 테스트값(배열) 값 이중for문
 * 3. test[k][s] === i, j 조건에서 등수(s)를 저장하여 mento < mentee 인것을 확인하면 cnt++
 * 4. 모든 테스트에서 등수가 앞서야 하니까 m === cnt 일때 증가
 */

function solution(arr) {
  let answer = 0;
  const m = arr.length;
  const n = arr[0].length;
  const temp = []; // 출력값 확인용도

  // 모든 경우의 수 이중 for문
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      // 주어진 배열값 직접 확인
      for (let k = 0; k < m; k++) {
        let mento = 0; // 멘토, 멘티 등수
        let mentee = 0;

        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) mento = s;
          if (arr[k][s] === j) mentee = s;
        }

        if (mento < mentee) cnt++;
      }

      if (cnt === m) {
        temp.push([i, j]);
        answer++;
      }
    }
  }
  console.log(temp);

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
