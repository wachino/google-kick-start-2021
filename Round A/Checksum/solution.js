process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((str) => str.trim());
  solution();
});

function readLine() {
  return inputString[currentLine++];
}

function solution() {
  const T = Number(readLine());
  for (let t = 0; t < T; t++) {
    const N = Number(readLine());
    // A
    Array(N)
      .fill(null)
      .map(() => readLine().split(' ').map(Number));

    let B = Array(N)
      .fill(null)
      .map(() => readLine().split(' ').map(Number));

    // rowCheckSums
    readLine().split(' ').map(Number);
    // columnCheckSums
    readLine().split(' ').map(Number);
    let costSum = B.map((r) => r.reduce((a, b) => a + b)).reduce((a, b) => a + b);
    console.log(`Case #${t + 1}: ${costSum - maxWeightSpanningTree(B)}`);
  }
}

function maxWeightSpanningTree(adj) {
  let n = adj.length * 2;
  let visited = Array(n)
    .fill(null)
    .map(() => false);
  let weight = Array(n)
    .fill(null)
    .map(() => 0);
  let parent = Array(n)
    .fill(null)
    .map(() => -1);

  for (let i = 0; i < n; i++) {
    let v = -1;
    let maxW = 0;
    for (let j = 0; j < weight.length; j++) {
      if (!visited[j] && (v === -1 || weight[j] > maxW)) {
        v = j;
        maxW = weight[j];
      }
    }

    visited[v] = true;
    for (let j = 0; j < weight.length; j++) {
      if (!visited[j] && getEdge(adj, j, v) > weight[j]) {
        weight[j] = getEdge(adj, j, v);
        parent[j] = v;
      }
    }
  }

  let mst = 0;
  for (let i = 0; i < parent.length; i++) {
    if (parent[i] !== -1) {
      mst += getEdge(adj, i, parent[i]);
    }
  }
  return mst;
}

function getEdge(adj, i, j) {
  if ((i >= adj.length && j >= adj.length) || (i < adj.length && j < adj.length)) {
    return 0;
  }
  let r = Math.min(i, j);
  let c = Math.max(i, j) - adj.length;
  return adj[r][c];
}
