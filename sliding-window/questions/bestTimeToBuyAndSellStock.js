const bruteMaxProfit = (arr) => {
  let buyingPrice = 0;
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    buyingPrice = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let currentPrice = arr[j];
      if (buyingPrice > currentPrice) {
        continue;
      } else {
        profit = Math.max(profit, currentPrice - buyingPrice);
      }
    }
  }

  return profit;
};

const prices = [10, 1, 5, 6, 7, 1];

// console.log(bruteMaxProfit(prices));

// Optimized Approach
const maxProfit = (arr) => {
  let leftPointer = 0;
  let rightPointer = 1;
  let maxProfit = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[leftPointer] > arr[rightPointer]) {
      leftPointer = rightPointer;
    } else {
      maxProfit = Math.max(maxProfit, arr[rightPointer] - arr[leftPointer]);
    }
    rightPointer += 1;
  }
  return maxProfit;
};

console.log(maxProfit(prices));
