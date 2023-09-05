function solution(arr) {
    if(arr.length === 1) return arr[0];
    
    const gcd = (a, b) => a%b === 0 ? b : gcd(b, a%b);
    const lcd = (a, b) => (a*b) / gcd(a,b);
    
    arr.sort((a,b) => b - a);
    
    let answer = lcd(arr[0], arr[1]);
    
    for(let i=2; i<arr.length; i++) {
        answer = lcd(answer, arr[i]);
    }
    
    return answer;
}