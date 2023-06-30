/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //create a map to store values in key-value pairs
    let obj = {};
    for(let str of strs){
        //sorting the character of each word in the string in ascending order
        let key = str.split('').sort().join('');
        //If the key already exists in the map then push word into it else assign new key
        (!(obj[key])) ? obj[key] = [str] : obj[key].push(str); 
    }
    return Object.values(obj);
};

//space complexity O(n) 
//Time complexity O(n)
