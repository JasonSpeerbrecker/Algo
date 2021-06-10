
/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let leftIdx = 0;
    let rightIdx = sortedNums.length - 1;
    let midIdx = Math.floor((rightIdx - leftIdx) / 2);

    while (leftIdx <= rightIdx) {

        if (sortedNums[midIdx] === searchNum) {
            return true;
            // Bonus:
            // return countAdjacentDupes(sortedNums, midIdx);
        }

        if (searchNum < sortedNums[midIdx]) {
            rightIdx = midIdx - 1;
            midIdx = Math.floor((rightIdx - leftIdx) / 2);
        } else {
            leftIdx = midIdx + 1;
            midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        }
    }
    return false;
    // Bonus:
    // return 0;
}
console.log(binarySearch(sortedNums, searchNum))


/*****************************************************************************/
// Create a function that takes array and searchnum
// [1,2,5,6]
// array.length / 2

/* 
Given two arrays, interleave them into one new array.
The arrays may be different lengths. The extra items should be added to the
back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @return {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    //returning a new array
    //loop both arrays completely
    let resultArray = [];
  let smallArray = 0;
  let bigArray = 0;
  //returning a new array
  //loop both arrays completely
  if (arr1.length < arr2.length) {
    smallArray = arr1;
    bigArray = arr2;
  } else {
    smallArray = arr2;
    bigArray = arr1;
  }
  for (let i = 0; i < smallArray.length; i++) {
    resultArray.push(bigArray[i]);
    resultArray.push(smallArray[i]);
  }
  for (let j = smallArray.length; j < bigArray.length; j++) {
    resultArray.push(bigArray[j]);
  }
  return resultArray;


}


