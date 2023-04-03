/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.
 *
 * 마지막 (가장 큰수)부터 채워지기 때문에 length-i 빼는 것이다
 */

function solution(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 0; j < str.length - 1 - i; j++) {
      if (str[j] > str[j + 1]) {
        [str[j], str[j + 1]] = [str[j + 1], str[j]];
      }
    }
  }

  return str;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
