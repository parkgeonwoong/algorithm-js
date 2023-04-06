/**
 * 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
 * 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
 * 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
 * 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다.
 * 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
 *
 * @푼방법
 * 완전탐색 방법으로 하나를 기준으로 삼고 나머지를 확인해보는 작업
 *
 * @다른방법
 * 그리드를 이용한 방법으로 최적은 방법은 '분리' 하는것
 * 1. 오는시간, 가는 시간 분리 → [14, 'start'], [18, 'end']
 * 2. 타임라인처럼 오름차순으로 정렬
 * 3. end가 먼저 와야한다 왜? 정각에 존재하지 않으니까
 * 4. start 만나면 cnt++, end 만나면 cnt--
 * 5. 최댓값 구하기
 */

// 내가 푼 방법
function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  for (let i = 0; i < arr.length; i++) {
    let end = arr[i][1];
    let cnt = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (end > arr[j][0]) cnt++;
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

// 그리드로 풀기
function solution(arr) {
  let answer = 0;
  let newArr = [];

  for (let x of arr) {
    newArr.push([x[0], "start"]);
    newArr.push([x[1], "end"]);
  }

  newArr.sort((a, b) => (a[0] === b[0] ? (a[1] > b[1] ? 1 : -1) : a[0] - b[0]));

  console.log(newArr);

  let cnt = 0;
  for (let x of newArr) {
    if (x[1] === "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
