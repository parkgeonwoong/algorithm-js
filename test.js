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
