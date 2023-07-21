function solution(s) {
    let n = s.split('');
    let turn = 0;   // 회차
    let cnt = 0;    // 0의 갯수
    
    while(n.length > 1) {
        turn++;
        
        // 제거할 0의 갯수
        let zero = n.filter((v) => v === '0')
        cnt += zero.length;
        
        // 0 제거 후 배열
        n = n.filter((v) => v !== '0')
        
        // 이진 변환 결과
        const result = (n.length).toString(2);
        n = result.split('');
    }
    
    return [turn, cnt];
}