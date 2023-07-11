function solution(s){
    const stack = []
    
    for(let x of s) {
        if(x==='(') stack.push(x)
        else {
            if(stack.length > 0) stack.pop();
            else return false;
        }
    }
    return stack.length === 0 ? true : false;
}