/**
 *  Problem Statement: Longest Substring Without Repeating Characters
 *  Given a string s, find the length of the longest substring without duplicate characters.
 *  A substring is a contiguous sequence of characters within a string.
 *
 *  Example 1:
 *  Input: s = "zxyzxyz"
 *  Output: 3
 *  Explanation: The string "xyz" is the longest without duplicate characters.
 *
 *  Example 2:
 *  Input: s = "xxxx"
 *  Output: 1
 *
 * @param {*} str
 */

const findLongestSubstringWithoutRepeatingChars = (str) => {
  let charSet = new Set();
  let longest = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    while (charSet.has(str[i])) {
      charSet.delete(str[i]);
      left += 1;
    }

    charSet.add(str[r]);
    right += 1;
  }
  return longest;
};

const str = "pwwkew";
const count = findLongestSubstringWithoutRepeatingChars(str);

console.log("Count: ", count);
