/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 *
 * @내가푼방법
 * 1. 배열을 문자로 바꾼다 왜? 각 자릿수별로 자를라고
 * 2. 각 자릿수별로 int형으로 바꾸면서 더하기
 * 3. 자릿수 합이 같을 수 있으니까 max 메소드를 사용해 앞에서부터 인덱스 === 뒤에서부터 인덱스 비교
 * 4. 다를경우 원본값에서 더 높은값으로 출력
 * (근데 이건 사실 틀림! 3개라면? 수십개라면?)
 *
 * @다른방법
 * 숫자를 문자로 바꾸지 않고 하는방법
 * 1. 10으로 나눈 나머지 값이 각자리수 → 합으로 구하고
 * 2. while문으로 몫이 0이 될때까지 10으로 나눈다.
 * 3. 합이 크면 max에 넣어주고, answer에 원본값 넣어준다
 * 4. 합과 max가 같으면, 원본값으로 비교해서 answer에 넣어준다.
 *
 */

// 내가 푼 방법
function solution(arr) {
  let answer = [];
  const strArr = [...arr].map(String);

  for (let i of strArr) {
    let cnt = 0;

    for (let j = 0; j < i.length; j++) {
      cnt += parseInt(i[j]);
    }

    answer.push(cnt);
  }

  const maxFirstIndex = answer.indexOf(Math.max(...answer));
  const maxEndIndex = answer.lastIndexOf(Math.max(...answer));

  if (maxFirstIndex === maxEndIndex) {
    return arr[maxFirstIndex];
  } else {
    return Math.max(arr[maxFirstIndex], arr[maxEndIndex]);
  }
}

// 다른방법 1.
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let i of arr) {
    let sum = 0;
    temp = i;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = i;
    } else if (sum === max) {
      if (i > answer) answer = i;
    }
  }

  return answer;
}

// 다른 방법 2.
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));
