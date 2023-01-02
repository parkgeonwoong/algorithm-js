function solution(my_string) {
  let answer = 0;
  let arr = [...my_string];

  arr.forEach((item) => {
    if (!isNaN(item)) {
      answer += parseInt(item);
    }
  });

  return answer;
}

const solution2 = (my_string) => {
  let a = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  console.log(a);
};

solution2("aAb1B2cC34oOp");
