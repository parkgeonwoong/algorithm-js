function solution(my_string) {
  return my_string
    .split(/[a-zA-Z]/)
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

solution("aAb1B2cC34oOp"); // 37
solution("abcdefg");
