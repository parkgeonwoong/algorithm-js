function solution(dots) {
  if (calculate(dots[0], dots[1]) === calculate(dots[2], dots[3])) {
    return 1;
  } else if (calculate(dots[0], dots[2]) === calculate(dots[1], dots[3])) {
    return 1;
  } else if (calculate(dots[0], dots[3]) === calculate(dots[1], dots[2])) {
    return 1;
  }

  return 0;
}

function calculate(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
