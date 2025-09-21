## Variable-size window (two-pointer expansion + contraction)

Use two pointers left = 0 and iterate right from 0..n-1.

Expand the window by including arr[right] and update state.

While the window satisfies (or violates depending on problem) the required condition, move left forward and update state.

Track the best answer during the process.

## JS Template (variable-size)

```javascript
function slidingWindowVariable(arr, conditionCheck) {
    let left = 0;
    let state = 0; // depends on problem (sum, freq map, etc.)
    let best = null; // depends on problem


    for (let right = 0; right < arr.length; right++) {
        // include arr[right] -> update state

        // while window satisfies/violates condition, shrink from left
        while (/* condition involving state and left..right */) {
            // update best if needed
            // remove arr[left] from state
            left++;
        }
    }


    return best;
}

```

## Complexity:

O(n) time (each element enters and leaves window at most once), O(k) or O(1) extra space depending on state.
