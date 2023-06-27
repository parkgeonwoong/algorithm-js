const s = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const countArr = s.map((pattern) => {
    return answers.reduce((count, answer, index) => {
      if (answer === pattern[index % pattern.length]) {
        count++;
      }
      return count;
    }, 0);
  });

  const maxNumber = Math.max(...countArr);
  const answer = countArr.reduce((result, count, index) => {
    if (count === maxNumber) {
      result.push(index + 1);
    }
    return result;
  }, []);
  return answer;
}

solution([1, 2, 3, 4, 5]);
