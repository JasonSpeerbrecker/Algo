l1 = ([1,2,'a','b']);
l2 = ([1,'a','b',0,15]);
l3 = ([1,2,'aasf','1','123',123]);

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter( str => typeof str != 'string');
  }

console.log(filter_list(l1));
console.log(filter_list(l2));
console.log(filter_list(l3));
