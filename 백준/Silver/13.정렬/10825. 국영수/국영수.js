const fileName = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

function solution(input) {
  const n = +input.shift().join();

  input.sort((a, b) => {
    if (+a[1] > +b[1]) return -1;
    else if (+a[1] < +b[1]) return 1;
    else {
      if (+a[2] > +b[2]) return 1;
      else if (+a[2] < +b[2]) return -1;
      else {
        if (+a[3] > +b[3]) return -1;
        else if (+a[3] < +b[3]) return 1;
        else {
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
        }
      }
    }
  });

  return input
    .reduce((a, b) => {
      a.push(b[0]);
      return a;
    }, [])
    .join("\n");
}

console.log(solution(input));
