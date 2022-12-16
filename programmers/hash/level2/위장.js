/**
 * @desc : 위장
 */

function solution(clothes) {
  let answer = 1;
  let obj = {};

  // 옷을 입지 않는 경우 + 1, 옷의 갯수 더해주는 것
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    console.log(obj);
  }
  //   console.log(clothes);
  //   console.log("obj: ", obj);

  for (let key in obj) {
    answer *= obj[key];
  }

  // 옷을 입지 않는 경우 제외
  console.log(answer - 1);
  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

// solution([
//   ["crow_mask", "face"],
//   ["blue_sunglasses", "face"],
//   ["smoky_makeup", "face"],
// ]);

solution([
  ["a", "face"],
  ["b", "eyewear"],
  ["c", "headgear"],
  ["d", "clothes"],
]);
