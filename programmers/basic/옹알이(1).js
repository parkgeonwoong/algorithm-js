/**
 * @desc : 내가 푼 방법
 * for문으로 순회를 해서 하나하나 옹알이 배열에서 대체한 것이 ' '
 * 완전대체가 가능한 것들은 length가 0
 *
 * @남의풀이
 * - 정규표현식으로 대체
 */

function solution(babbling) {
  let answer = 0;
  let word = "";

  for (let i of babbling) {
    word = i;

    for (let j of arr) {
      word = word.replaceAll(j, " ");
    }
    console.log("word: ", word);

    if (word.trim().length === 0) answer++;
  }

  return answer;
}

// 남의 풀이
function solution(babbling) {
  let answer = 0;
  const reg = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (reg.test(word)) answer++;
  });

  return answer;
}

const arr = ["aya", "ye", "woo", "ma"];

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
