function topKFrequent(nums, k){
    //Create a hash to store data in key-value pairs
    const freqCounter = {}
    for(const num of nums){
        //If value exist in the hash increment else set to 1
        freqCounter[num] = (freqCounter[num] || 1) + 1;
    }
    //Create a bucket to sort values in ascending order
    const bucket = []
    for( const [element, count] of Object.entries(freqCounter)){
        if(!bucket[count]){
            bucket[count] = []
        }
        bucket[count].push(element);
    }
    //create an array to store top k elements
    const result = []
     for( let i = bucket.length -1; i >= 0; i--){
    for(const element of bucket[i] || []){
        result.push(element)
        if(result.length === k){
            return result
        }
    }
}
    return result
}

// O(n)