function solution(k, tangerine) {
    let answer = 0;
    let sum = 0;
    
    // 객체로 저장
    const obj = {};
    tangerine.forEach((v) => obj[v] = obj[v]+1 || 1)
    
    // 배열화 및 내림차순
    const arr = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    
    for(let x of arr) {
        answer++;
        sum += x[1];
        
        if(sum >= k) break;
    }
    return answer;
}