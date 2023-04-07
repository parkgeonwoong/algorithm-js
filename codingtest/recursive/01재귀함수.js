/**
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요
 *
 * @재귀함수
 * - 스택 구조
 * - 스택 프레임에 쌓임 → 함수가 호출될 때, 그 함수만의 스택 영역을 구분하기 위하여 생성되는 공간
 * - 스택 프레임에 매개변수, 지역변수, 복귀 주소가 생성
 */

function solution(n) {
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(n - 1);
      console.log(n);
    }
  }

  DFS(n);
}

console.log(solution(3));
