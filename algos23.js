/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 Input: nums1 = [1,2,2,1], nums2 = [2,2]

 var intersect = function(nums1, nums2) {
    var intersection = [];

    for(var i=0;i<nums1.length ; i++){

        if(nums2.length == 0){
            return intersection;
        }        
        if(nums2.indexOf(nums1[i]) !== -1){
            intersection.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]),1);
        }
        
    }
    
    return intersection;
};

console.log(intersect(nums1,nums2))