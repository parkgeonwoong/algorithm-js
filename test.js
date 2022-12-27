function solution(array) {
  const cnt = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  console.log("1.cnt", cnt); // { '1': 1, '2': 1, '3': 4, '4': 1 }

  const items = Object.keys(cnt)
    .map((key) => [Number(key), cnt[key]])
    .sort((a, b) => b[1] - a[1]);

  console.log("2.items", items); // [ [ 3, 4 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]

  // undefined 때문에 ?. 추가
  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
}

console.log(solution([1, 2, 3, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
