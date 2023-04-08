/**
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 *
 * @고민
 * 중복되지 않게 어떻게 하지?
 * - 체크로 표시하기 위해 새로운 배열 만듬
 */

function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let temp = Array.from({ length: m }, () => 0);
  let chk = Array.from({ length: n }, () => 0);

  function DFS(Level) {
    if (m === Level) {
      answer.push([...temp]);
    }

    //
    else {
      for (let i = 0; i < n; i++) {
        if (chk[i] !== 1) {
          chk[i] = 1;
          temp[Level] = arr[i];
          DFS(Level + 1);
          chk[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return [answer, answer.length];
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
