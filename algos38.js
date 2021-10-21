
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
 
const nums1 = [1,3,5,6]
const target1 = 5


 var searchInsert = function (nums, target) {

    for (let index = 0; index < nums.length; index++) {
      if (target <= nums[index]) {
        return index;
      }
    }
    return nums.length;
  };

  console.log(searchInsert(nums1, target1))