/**
 *
 * Problem Statement: N-Queens (LeetCode 51)
 *
 */

const solveNQueens = (n) => {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isValid(row, col) {
    // check column
    for (let i = 0; i < row; i++) if (board[i][col] === "Q") return false;
    // check top-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
      if (board[i][j] === "Q") return false;
    // check top-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
      if (board[i][j] === "Q") return false;
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) continue;
      board[row][col] = "Q";
      backtrack(row + 1);
      board[row][col] = ".";
    }
  }

  backtrack(0);
  return result;
};

console.log(solveNQueens(4));

// Complexities:
// Time: O(N!) (each queen placement reduces options drastically)
// Space: O(N^2) for the board
