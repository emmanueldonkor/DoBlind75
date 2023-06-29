//Two Sum solution with frequency counter and hashing

function twoSum(nums, target){
    //create a hash to store elements in key-value pairs
    const hash = {};
    for(let i =0; i < nums.length; i++){
        const diff = target - nums[i];
        if(diff in hash){
            return [hash[diff], i];
        }
        hash[nums[i]] = i;
    }
      return [];
}