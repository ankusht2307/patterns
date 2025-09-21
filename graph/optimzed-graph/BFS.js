const hasPathBFS = (graph, src, dst) => {
  const queue = [src];
  const visited = new Set([src]);

  while (queue.length) {
    const node = queue.shift();
    if (node === dst) return true;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
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

console.log(hasPathBFS(graph, "A", "D")); // true

// Big O
// Time: O(V + E)
// Space: O(V)
