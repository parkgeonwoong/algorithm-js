function solution(str) {
  for (let i = 1; i < str.length; i++) {
    let temp = str[i];
    let j = i;

    while (j > 0 && str[j - 1] > temp) {
      str[j] = str[j - 1];
      j--;
    }

    str[j] = temp;
  }

  return str;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
