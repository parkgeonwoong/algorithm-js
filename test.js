function solution(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - 1 - i; j++) {
      if (str[j] > str[j + 1]) {
        [str[j], str[j + 1]] = [str[j + 1], str[j]];
      }
    }
  }

  return str;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
