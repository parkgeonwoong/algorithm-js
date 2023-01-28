function solution(id_pw, db) {
  let answer = "";

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) answer = "login";
    if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) answer = "wrong pw";
    if (id_pw[0] !== db[i][0] && id_pw[1] !== db[i][1]) answer = "fail";
  }
  console.log(answer);
  return answer;
}

// 남의 풀이
function solution(id_pw, db) {
  let dbs = db.filter((v) => v[0] === id_pw[0]);

  if (!dbs.length) return "fail";

  for (let i of dbs) {
    if (i[1] === id_pw[1]) return "login";
  }

  return "wrong pw";

  // console.log(dbs);
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);

solution(
  ["programmer01", "15789"],
  [
    ["programmer02", "111111"],
    ["programmer00", "134"],
    ["programmer01", "1145"],
  ]
);

solution(
  ["rabbit04", "98761"],
  [
    ["jaja11", "98761"],
    ["krong0313", "29440"],
    ["rabbit00", "111333"],
  ]
);
