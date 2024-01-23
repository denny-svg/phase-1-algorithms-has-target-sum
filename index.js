function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenArray = new Set();
 // Code for  returning array true
  for (let number of array) { 
    const difference = target - number; 
    
    if (seenArray.has(difference)) {
      return true;
    }
    
    seenArray.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) - Linear time complexity, where n is the number of elements in the input array.

  The function is O(n) where "n" is the number of the elements in the input array.
*/

/* 
  Add your pseudocode here
  - Create an empty set called seenArray
  - Iterate through each element number in the input array:
    - Calculating the difference = target - number
    - If the difference is in seenArray,  it returns true
    - Add number to seenArray
  - If no pair is found, return false
*/

/*
  Add a written explanation of your solution here
  The function uses a set to keep track of numbers seen while iterating through the input array. For each number, it calculates the difference between the target and the current number. If the difference is found in the set, it means there is a pair that adds up to the target, and the function returns true. If no such pair is found, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
