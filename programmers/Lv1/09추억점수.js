/**
 * 푼방식
 * 1. 삼중 for문 -> 가독성이 떨어져서 다른방법 생각
 *  주어진 배열 두개가 갯수가 일치하니까 인덱스로 생각
 * 2. 이중 for문에 indexOf()로 인덱스 찾는 방법 -> 이것도 가독성이 좋지 않음
 * 3. map방식 -> photo의 갯수만큼 출력값이 나오니까
 * 4. reduce로 풀어보기
 * 5. Object로 풀어보기
 */

function solution(name, yearning, photo) {
  return photo.map((n) => {
    let sum = 0;
    for (let x of n) {
      const index = name.indexOf(x);
      if (index !== -1) sum += yearning[index];
    }
    return sum;
  });
}

// reduce
function solution(name, yearning, photo) {
  return photo.map((n) =>
    n.reduce((sum, x) => {
      const index = name.indexOf(x);
      if (index !== -1) {
        return sum + yearning[index];
      }
      return sum;
    }, 0)
  );
}

// Object
function solution(name, yearning, photo) {
  const yearningMap = {};

  for (let i = 0; i < name.length; i++) {
    yearningMap[name[i]] = yearning[i];
  }

  return photo.map((n) => n.reduce((sum, x) => sum + (yearningMap[x] || 0), 0));
}
