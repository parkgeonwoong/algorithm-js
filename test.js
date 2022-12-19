function solution(array) {
  let answer = 0;
  let arr = new Array(10).fill(0);

  for (let i = 0; i < array.length; i++) {
    arr[array[i]]++;
  }

  console.log("arr", arr);

  let max = Math.max(...arr);

  let temp = [...arr];
  temp.sort((a, b) => b - a);

  console.log(temp);

  if (temp[0] === temp[1]) {
    answer = -1;
  } else {
    answer = max;
  }

  console.log("answer", answer);

  return answer;
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);

// 최빈값 구하기
// function solution(array) {

// }
