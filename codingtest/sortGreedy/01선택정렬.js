/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.
 *
 * * - 하나를 선택 → 인덱스 칸에 담음 → 나머지와 싹다 비교해서 최소값 찾으면 인덱스 칸에 넣음 → 교환
 */

function solution(str) {
  let minIndex = 0;

  for (let i = 0; i < str.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < str.length; j++) {
      if (str[minIndex] > str[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [str[i], str[minIndex]] = [str[minIndex], str[i]];
    }
  }

  return str;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
