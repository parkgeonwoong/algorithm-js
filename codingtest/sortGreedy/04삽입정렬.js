/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.
 *
 * i : 1 ~ length 만큼 돌면서
 * 좌측은 계속 정렬해가는 모습 그러면서 temp값이 적절한 위치에 넣는것
 */

function solution(str) {
  for (let i = 1; i < str.length; i++) {
    let j = i;
    let temp = str[i];

    while (j > 0 && str[j - 1] > temp) {
      str[j] = str[j - 1];
      j--;
    }
    str[j] = temp;
  }

  return str;
}

// for문 2개
function solution(str) {
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (str[j] > temp) {
        str[j + 1] = str[j];
      } else {
        break;
      }
    }
    str[j + 1] = temp;
  }
  return str;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
