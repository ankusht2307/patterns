const hasPathBruteForce = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathBruteForce(graph, neighbor, dst, visited)) return true;
  }
  return false;
};

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

console.log(hasPathBruteForce(graph, "A", "D")); // true

// Big O:
// Time: O(V + E) in practice (though recursive brute force may revisit nodes if visited is mishandled).
// Space: O(V) recursion stack.
