## Graphs Pattern (BFS / DFS / Shortest Path / Topological Sort)

Graphs model relationships between entities. Problems often involve traversal, connectivity, shortest paths, or ordering.

## Intuition

- DFS: Explore deep before backtracking (good for connectivity, cycles, components).
- BFS: Explore level by level (good for shortest path in unweighted graphs).
- Topological Sort: Ordering nodes by dependency (works only for DAGs).
- Shortest Path Weighted: Use BFS (unweighted), Dijkstra (non-negative weights), Bellman-Ford (negative weights), Floyd-Warshall (all-pairs).

## Common Pitfalls

- Forgetting to mark nodes as visited → infinite recursion/loops.
- Confusing BFS vs DFS (BFS ensures shortest path, DFS doesn’t).
- Wrongly handling directed graphs (need indegree for topo sort).
- Mutating input grids/graphs without copying (may cause unintended side effects).

## Practice Problems

Easy

- [LC 200] Number of Islands
- [LC 733] Flood Fill
- [LC 695] Max Area of Island

Medium

- [LC 102] Binary Tree Level Order Traversal
- [LC 785] Is Graph Bipartite?
- [LC 994] Rotting Oranges

Hard

- [LC 210] Course Schedule II
- [LC 329] Longest Increasing Path in a Matrix
- [LC 1192] Critical Connections in a Network
