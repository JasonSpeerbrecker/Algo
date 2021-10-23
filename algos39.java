// class Solution {
//     public int solution(String S) {
//         // write your code in Java SE 8
        
// int a = S.length();

// int[] array = new int[a];

// if (S.charAt(0) == 'X'){
//     array[0] = 1;
// } else {
//     array[0] = 0;
// } 

// if (S.charAt(1) == 'X'){
//     array[1] = 1;
// } else {
//     array[1] = array[0];
// } 

// if (S.charAt(2) == 'X'){
//     array[2] = 1;
// } else {
//     array[2] = array[0];
// } 

// for (int i = 3; i < a; i++) {
//     if (S.charAt(i) == 'X'){
//         array[i] = array[i - 3] + 1;
//     } else {
//         array[i] = array[i - 1];
//     }
// }

// return array[a-1];

//     }
// }

class Solution {
    public int solution(String S) {
        // write your code in Java SE 8
        
  int holes = 0;

  for (int i = 0; i < S.length(); i++)
    if (S.charAt(i) == 'X') {
      holes++;
      i += 2;
    }
  }
  return holes;
}