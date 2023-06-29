function isPrime(n) {
    if(n === 1) return false;
    
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i === 0) return false;
    }
    return true; 
}

function solution(nums) {
    let answer = 0;
    const n = nums.length
    
    for(let i=0; i<n-2; i++) {
        for(let j=i+1; j<n-1; j++) {
            for(let k=j+1; k<n; k++) {
                const sum = nums[i] + nums[j] + nums[k]
                answer += isPrime(sum) ? 1 : 0
            }
        }
    }
    return answer;
}