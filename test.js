function solution(polynomial) {
  const arr = polynomial.split(" + ");

  // 1. x계산
  const xSum = arr.reduce((acc, cur) => {
    if (cur === "x") return acc + 1;
    if (cur.includes("x")) return acc + Number(cur.replace("x", ""));
    return acc;
  }, 0);

  // 2. 상수계산
  const cnt = arr.reduce((acc, cur) => {
    if (!cur.includes("x")) return acc + Number(cur);
    return acc;
  }, 0);

  console.log("xSum: ", xSum, "cnt: ", cnt);

  // 3. 합치기
  const answer = `${
    xSum
      ? xSum === 1
        ? "x" + (cnt ? " + " + cnt : "")
        : xSum + "x" + (cnt ? " + " + cnt : "")
      : "" + (cnt ? cnt : "")
  }`;

  console.log("answer: ", answer);
  return answer;
}

solution("x + 9x ");
solution("2 + 1");
