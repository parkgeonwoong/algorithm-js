/**
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고,
 * 만들 수 없으면 ”NO"를 출력한다.
 */

// 내가 푼 것
function solution(a, b, c) {
  let arr = [a, b, c].sort((a, b) => a - b);

  if (arr[0] + arr[1] > arr[2]) {
    return console.log("YES");
  } else {
    return console.log("NO");
  }
}

// 남이 푼 것
function solution(a, b, c) {
  let answer = "YES",
    max;
  const sum = a + b + c;

  a < b ? (max = b) : (max = a);
  if (c > max) max = c;
  if (sum - max <= max) answer = "NO";

  console.log(answer);
  return answer;
}

solution(6, 11, 7);
solution(13, 33, 17);
