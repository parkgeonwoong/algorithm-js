/**
 * @desc : 모스부호
 */

const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

// 내가 푼 방법
function solution(letter) {
  let answer = "";

  const letterArr = letter.split(" ");

  for (let i = 0; i < letterArr.length; i++) {
    for (let j in morse) {
      if (letterArr[i] === j) {
        answer += morse[j];
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution2(letter) {
  return letter.split(" ").reduce((acc, cur) => acc + morse[cur], "");
}

function solution3(letter) {
  letter = letter.split(" ");
  for (let i = 0; i < letter.length; i++) {
    answer += morse[letter[i]];
  }
}

solution(".... . .-.. .-.. ---");
