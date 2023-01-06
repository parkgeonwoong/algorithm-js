function solution2(my_string, num1, num2) {
  let arr = [...my_string];
  let change = arr.splice(num1, 1, arr[num2]);

  arr[num2] = change[0];
  return arr.join("");
}

function solution(my_string, num1, num2) {
  let arr = [...my_string];
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

  console.log(arr.join(""));
  return arr.join("");
}

solution("hello", 1, 2);
solution("I love you", 3, 6);
