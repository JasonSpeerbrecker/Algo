// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  var arr = num1.toString().split("");
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] == arr[i + 2]) {
      num = arr[i];
      break;
    }
  }
  var arr2 = num2.toString().split("");
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr2[i + 1] && arr2[i] === num) {
      return 1;
    }
  }
  return 0;
}
