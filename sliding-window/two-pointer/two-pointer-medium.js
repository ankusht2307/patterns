/**
 * Problem statement: Longest substring without repeating characters (variable-size)
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Idea: Expand right and keep a map of character frequencies/indexes.
 * If repeat detected, shrink left until no repetition.
 *
 */

const lengthOfLongestSubstring = (s) => {
  const lastIndex = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastIndex.has(ch) && lastIndex.get(ch) >= left) {
      // we found a repeat inside current window
      left = lastIndex.get(ch) + 1; // move left right after previous occurrence
    }
    lastIndex.set(ch, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Key subtlety: When moving left, set it to max(left, prevIndex+1) if you used other
// implementations; here we check prev index >= left to ensure correct shrinking.
// Complexity: O(n) time, O(min(n, charset)) space.
