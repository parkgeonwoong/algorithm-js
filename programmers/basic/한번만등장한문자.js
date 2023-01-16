/**
 * 나의 풀이
 */

function solution(s) {
  let answer = "";
  let temp = {};

  [...s].forEach((item) => (temp[item] = (temp[item] || 0) + 1));

  Object.keys(temp).map((item) => {
    if (temp[item] === 1) {
      answer += item;
    }
  });

  answer = [...answer].sort().join("");

  return answer;
}

/**
 * 남의 풀이
 */
const solution2 = (s) => {
  let result = [];

  for (let i of s) if (s.indexOf(i) === s.lastIndexOf(i)) result.push(i);
  return result.sort().join("");
};

solution("abcabcadc");
solution("aabbddcc");
