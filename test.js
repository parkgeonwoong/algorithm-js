function solution(str) {
  str = str.toLowerCase();

  if (str.split("").reverse().join("") !== str) return "NO";

  return "YES";
}

let str = "goooG";

console.log(solution(str));
