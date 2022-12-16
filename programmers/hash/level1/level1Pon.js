/**
 * @desc : 폰켓몬
 * @param {*} nums
 */

function solution(nums) {
  let answer = 0;
  let arr = []; // 새로운 배열을 만들어서 넣어주기
  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) === -1) {
      arr.push(nums[i]);
    }
  }
  //   console.log(arr);

  arr.length > nums.length / 2
    ? (answer = nums.length / 2)
    : (answer = arr.length);

  console.log("answer", answer);
}

solution([3, 1, 2, 3]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
