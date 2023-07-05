function solution(s) {
    const arr = s.split(' ').map(Number);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return [min, max].join(' ');
}