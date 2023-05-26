/**
 * 3진법 자체를 일일이 바꾸는 방법으로 구현하였는데,
 * `toString`이 진법 변환을 해준다. -> toString(3) 10진법 -> 3진법
 * `parseInt(string, radix) -> radix는 진수 변환가능
 */

function solution(n) {
  let temp = "";
  while (n >= 1) {
    temp += n % 3;
    n = parseInt(n / 3);
    if (n === 1) {
      temp += n;
      break;
    }
  }
  return [...temp].reduce(
    (acc, cur, i) => (acc += parseInt(cur) * 3 ** (temp.length - 1 - i)),
    0
  );
}

//
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
