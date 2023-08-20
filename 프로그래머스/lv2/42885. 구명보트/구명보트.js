function solution(people, limit) {
    let answer = 0;
    let right = people.length-1;
    
    people.sort((a,b) => b - a) 
    
    // 투포인트 -> 가장큰값과 작은값의 합으로 비교
    for(let left=0; left<=right; left++) {
        const sum = people[left] + people[right]
        if(sum <= limit) {
            right--;
        }
        answer++;
    }
    return answer;
}