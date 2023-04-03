function solution(n, arr) {
  let answer = Array.from({ length: n }, () => 0);

  arr.forEach((x) => {
    let pos = -1;

    // hit, miss 판별부터
    for (let i = 0; i < n; i++) if (x === answer[i]) pos = i;

    // 없으면 맨앞에 넣어주고 miss
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > n) answer.pop();
    }

    // 있으면 잘라내고, 맨앞에다가 배치 hit
    else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
