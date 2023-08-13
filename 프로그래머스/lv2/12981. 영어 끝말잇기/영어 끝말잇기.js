function solution(n, words) {
    const chk = [words[0]];
    
    for(let i=1; i<words.length; i++) {
        const now = words[i]            // 현재 단어
        const nPerson = i%n + 1         // n번째 번호
        const cnt = Math.floor(i/n) + 1 // 차례
        const last = chk[chk.length-1].slice(-1);
        const first = now.slice(0,1);
        
        if(last !== first || chk.includes(now) || now.length === 1) {
            return [nPerson, cnt]
        }
        chk.push(now);
    }
    return [0,0];
}