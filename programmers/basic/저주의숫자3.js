function solution(n) {
  let x3 = 0;

  for (let i = 1; i <= n; i++) {
    x3 += 1;

    for (let j = 0; j <= n; j++) {
      if (x3 % 3 === 0 || x3.toString().includes("3")) {
        x3 += 1;
      }
    }
  }

  return x3;
}

// while 방식
function solution(n) {
  let count = 0;
  let x3 = 1;

  while (count < n) {
    if (x3 % 3 !== 0 && !x3.toString().includes("3")) {
      count += 1;
    }
    x3 += 1;
    console.log("x3", x3 - 1);
  }

  return x3 - 1;
}

solution(15);

// solution(40);
