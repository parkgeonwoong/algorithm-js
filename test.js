// function solution(my_string, n) {
//   let answer = [];

//   let spl = my_string.split("");

//   spl.forEach((item) => {
//     for (let i = 0; i < n; i++) {
//       answer.push(item);
//     }
//   });

//   return answer.join("");
// }

// function solution(my_string, n) {
//   let answer = [...my_string].map((item) => item.repeat(n)).join("");
//   return answer;
// }

// console.log(solution("hello", 3));

const a = "hello";
const b = ["hello", "world"];

console.log([...a]);
console.log([...b]);
