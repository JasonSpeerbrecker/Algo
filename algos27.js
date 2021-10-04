/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 

//  Example 1:
 Input: nums1 = [2,7,11,15], target1 = 9

//  Example 2:
 Input: nums2 = [3,2,4], target2 = 6
//  Example 3:
 
 Input: nums3 = [3,3], target3 = 6

 var twoSum = function(nums, target) {
    var result = [];
 
     for (var i = 0; i < nums.length; i++) {
         for (var j = i + 1; j < nums.length; j++) {
             if (nums[i] + nums[j] === target) {
                 result.push(i);
                 result.push(j);
             }
         }
     }
     return result;
 };

 console.log (result);