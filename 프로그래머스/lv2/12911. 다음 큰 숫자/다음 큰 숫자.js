function solution(n) {
    let answer = 0;
    const oneCnt = (n.toString(2)).split('').filter((v) => v === '1').length;
    
    while(n++) {
        const oneIncreaseCnt = (n.toString(2)).split('').filter((v) => v === '1').length;
        if(oneCnt === oneIncreaseCnt) {
            answer = n;
            break;
        }
    }
    return answer;
}