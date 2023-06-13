/**
 * 11655
 */

const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(fileName).toString();

console.log(input);

function solution(input) {
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (!char.match(/[A-Za-z]/)) {
      answer += char;
    } else {
      const baseChar =
        char.toLowerCase() === char ? "a".charCodeAt() : "A".charCodeAt();
      const shiftChar = ((char.charCodeAt() - baseChar + 13) % 26) + baseChar;
      answer += String.fromCharCode(shiftChar);
    }
  }
  return answer;
}
console.log(solution(input));
