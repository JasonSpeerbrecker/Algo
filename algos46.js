s1 = "{[]}";
s2 = "([)]";
s3 = "(]";
s4 = "()[]{}";
s5 = "()";

const isValid = (s) => {
    if (s.length % 2 !== 0) return false;
    
    const stack = [];
    const map = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}']
    ]);
      
    for (let i = 0 ; i < s.length ; i += 1) {
      if (map.has(s[i])) {
        stack.push(map.get(s[i]));
      } else if (s[i] !== stack.pop()) {
        return false;
      } 
    }
    return stack.length === 0;
  };

  console.log(isValid(s1));
  console.log(isValid(s2));
  console.log(isValid(s3));
  console.log(isValid(s4));
  console.log(isValid(s5));