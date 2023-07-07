function productExceptSelf(nums){
 const n = nums.length;
 const left = []
 const right = []
 left[0] = 1
 right[n-1] = 1
 for(let i = 1; i < n; i++){
  left[i] = left[i-1] * nums[i-1];
 }
 for(let i = n-1; i >= 0; i--){
    right[i] = right[i+1] * nums[i+1]
 }

 const result = [];
 for (let i = 0; i < n; i++) {
   result[i] = left[i] * right[i];
 }
 return result

}
//Time complexity O(n)