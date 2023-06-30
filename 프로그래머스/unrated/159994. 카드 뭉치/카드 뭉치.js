function solution(cards1, cards2, goal) {
    
    for(let v of goal) {
        if(v === cards1[0])       cards1.shift();
        else if (v === cards2[0]) cards2.shift();
        else return "No";
    }
    return "Yes";
}