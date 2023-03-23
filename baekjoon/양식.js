const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    // input = line.split(" ").map((el) => parseInt(el)); // 한줄씩 띄어쓰기
    input.push(line); // 여러줄
    //  input.push(line.split(' ').map(el => parseInt(el))); 공백이 포함된 여러줄
  })
  .on("close", function () {
    //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
  });

function solution(input) {
  console.log(input);
}
solution();
