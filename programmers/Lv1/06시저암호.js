/**
 * 계속 틀린 이유는 z -> a만 생각했음 h + 25 -> 넘어가야함
 */

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") {
      answer += " ";
      continue;
    }
    const baseChar =
      char.toLowerCase() === char ? "a".charCodeAt() : "A".charCodeAt();
    const shiftChar = ((char.charCodeAt() - baseChar + n) % 26) + baseChar;

    answer += String.fromCharCode(shiftChar);
  }
  return answer;
}
