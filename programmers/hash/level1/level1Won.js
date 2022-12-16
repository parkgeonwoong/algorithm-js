/**
 * @desc: 완주하지 못한 선수
 * @param {*} participant
 * @param {*} completion
 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant, " : ", completion);

  //   for (let i = 0; i < participant.length; i++) {
  //     if (participant[i] !== completion[i]) {
  //       return participant[i];
  //     }
  //   }

  // for in loop
  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      console.log(participant[i]);
    }
  }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
