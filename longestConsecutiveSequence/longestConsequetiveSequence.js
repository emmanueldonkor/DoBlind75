var longestConsecutive = function(nums) {
    const numSet = new Set();
    
    // Add numbers to the set
    for (const num of nums) {
      numSet.add(num);
    }
    
    let longestStreak = 0;
    
    // Iterate through the nums array
    for (const num of nums) {
      // Check if num is the starting point of a new consecutive sequence
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
        
        // Calculate the length of the consecutive sequence
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentStreak++;
        }
        
        // Update longestStreak if necessary
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
    
    return longestStreak;
  };
//O(n)  