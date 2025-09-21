/**
 *
 * Problem Statement: Shortest Path in Unweighted Graph (BFS)
 *
 */

const shortestPath = (graph, src, dst) => {
  const queue = [[src, 0]];
  const visited = new Set([src]);

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === dst) return dist;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
};

const g = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(shortestPath(g, "A", "F")); // 2

// Big O:
// Time: O(V + E)
// Space: O(V)
