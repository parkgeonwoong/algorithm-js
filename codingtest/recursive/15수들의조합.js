/**
 * N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
 * 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12 2+4+12로 2가지가 있습니다.
 */

function solution(n, k, arr, m) {
  let answer = 0;
  let temp = Array.from({ length: k });

  function DFS(Level, start, sum) {
    if (Level === k) {
      if (sum % m === 0) {
        console.log(temp, sum);
        answer++;
      }
    }
    //
    else {
      for (let i = start; i < n; i++) {
        temp[Level] = arr[i];
        DFS(Level + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
