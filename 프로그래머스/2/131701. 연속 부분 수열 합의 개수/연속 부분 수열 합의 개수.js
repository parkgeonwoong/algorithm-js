function solution(elements) {
    const answer = new Set();
    const n = elements.length;
    
    for(let i=1; i<=n; i++) {
        const circle = elements.concat(elements.slice(0, i))
        
        for(let j=0; j<n; j++) {
            const sum = circle.slice(j, j+i).reduce((acc, cur) => acc+cur,0);
            answer.add(sum);
        }
    }
    
    return [...answer].length;
}