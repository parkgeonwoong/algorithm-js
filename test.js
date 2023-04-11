function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let next of [v * 2, v * 2 + 1]) {
      if (next > 7) continue;
      queue.push(next);
    }
  }

  return answer;
}
console.log(solution());
