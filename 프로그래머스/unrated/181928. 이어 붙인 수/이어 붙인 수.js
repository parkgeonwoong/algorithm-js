function solution(n) {
    let even = '';
    let odd = '';
    
    return n.reduce((acc, cur) => {
        cur%2 === 0 ? even += cur+'' : odd += cur+''
        return acc = +even + +odd;
    }, 0)
}