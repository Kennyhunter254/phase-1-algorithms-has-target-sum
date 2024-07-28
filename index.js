function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the array.
  This is because we only iterate through the array once, and checking for and adding 
  elements to a set both have average time complexities of O(1).
*/

/* 
  Add your pseudocode here

  1. Initialize an empty set to keep track of numbers we have seen so far.
  2. Iterate over each number in the array:
    a. Calculate the complement of the current number (target - current number).
    b. If the complement is in the set of seen numbers, return true.
    c. Add the current number to the set of seen numbers.
  3. If no two numbers add up to the target, return false.
*/

/*
  Add written explanation of your solution here

  The `hasTargetSum` function determines if any two numbers in the given array 
  sum up to the target integer. It uses a set to keep track of the numbers 
  we have seen so far. For each number in the array, it calculates the complement 
  needed to reach the target (target - current number). If this complement is 
  already in the set, it means there are two numbers in the array that sum up to the 
  target, so the function returns true. If no such pair is found by the end of the 
  iteration, the function returns false.
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
