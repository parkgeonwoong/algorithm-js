function solution(arr) {
    const multiple = arr.reduce((a,b) => a*b, 1);
    const square = arr.reduce((a,b) => a+b, 0) ** 2;
    return multiple < square ? 1 : 0
}