/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
let nonDupes=nums.length;
let lastNonDupe=nums[0];

for(let i=0;i<nums.length;i++){
    const currentVal= nums[i];
    const nextVal= nums[i+1];

    if(currentVal!=999){
        //not a dupe so update and use for compare
        lastNonDupe=currentVal;  
    }
    if(lastNonDupe==nextVal){
        nums[i+1]=999;
        nonDupes-=1;
    }
}
nums.sort((a,b) =>a-b);
return nonDupes;
};