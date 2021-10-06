/**
 * @param {string} s
 * @return {number}
 */

const s = "III"
const s1 = "IV"

 var romanToInt = function(s) {
    let map = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    
    let result = 0;
    let prev = 0;
    
    for (let i =0; i < s.length; i++){
        let num = map[s[i]];
        if(num > prev){
            result += num -2 * prev
        } else {
            result += num
        }
        prev = num;
    }
    return result
};

console.log(romanToInt(s));
console.log(romanToInt(s1));