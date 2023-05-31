/**
 * 내가 접근한 생각은 무작위의 3개가 계속 이어지는데 합이 0으로 딱 떨어짐으로 DFS로 완전탐색을 생각해봤다.
 * 하지만 생각해보면 그렇게 좋은 방법은 아닌듯하다. 그리고 중복되는 배열이니까 중복되는 만큼 나눠줘야하는데 3개로 한정되어있어서 2x3 6으로 나눔
 *
 * 배열 중에 3개를 선택하는 방법으로 생각해봐야한다.
 */

// 내가 푼 방법
function solution(number) {
  let answer = 0;
  let n = number.length;
  let chk = Array.from({ length: n }, () => 0);

  function DFS(L, total) {
    if (L > 3) return;
    if (total === 0 && L === 3) answer++;
    else {
      for (let i = 0; i < n; i++) {
        if (chk[i] !== 1) {
          chk[i] = 1;
          DFS(L + 1, total + number[i]);
          chk[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return answer / 6;
}

// 리팩토링
function solution(number) {
  let answer = 0;
  let n = number.length;

  function DFS(L, total, start) {
    if (L > 3) return;
    if (L === 3) answer += total === 0 ? 1 : 0;
    else {
      for (let i = start; i < n; i++) {
        DFS(L + 1, total + number[i], i + 1);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

// 다른사람 풀이
function solution(number) {
  let answer = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      answer += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return answer;
}
