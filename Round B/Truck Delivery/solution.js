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

let segmentTree;

function solution() {
  const T = Number(readLine());
  for (let t = 0; t < T; t++) {
    const [N, Q] = readLine().split(/\s+/).map(Number);
    let map = Array(N)
      .fill(null)
      .map(() => []);
    let limits = [0n];

    for (let i = 1; i < N; i++) {
      let [X, Y, L, A] = readLine().split(/\s+/).map(BigInt);
      X--;
      Y--;
      map[X].push({ dest: Y, L, A });
      map[Y].push({ dest: X, L, A });
      limits.push(L);
    }
    segmentTree = Array(2 ** (Math.ceil(Math.log2(N)) + 1)).fill(0n);

    limits.sort((a, b) => {
      if (a == b) return 0;
      return a < b ? -1 : 1;
    });

    let queriesByCity = Array(N)
      .fill(null)
      .map(() => []);
    for (let i = 0; i < Q; i++) {
      let [C, W] = readLine().split(/\s+/).map(Number);
      C--;
      W = BigInt(W);
      queriesByCity[C].push({ W, i });
    }
    let ans = Array(Q).fill(0);
    computeAll(map, limits, queriesByCity, ans);
    console.log(`Case #${t + 1}: ${ans.join(' ')}`);
  }
}

function computeAll(map, limits, queriesByCity, ans) {
  for (let i = 0; i < map[0].length; i++) {
    let next = map[0][i];
    let left = 0;
    let right = limits.length - 1;
    let mid;
    while (left < right) {
      mid = (left + right + 1) >> 1;
      if (limits[mid] > next.L) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    update(next.A, 0, limits.length - 1, left);
    computeFrom(0, next, map, limits, queriesByCity, ans);
    update(0n, 0, limits.length - 1, left);
  }
}

function setAnsFor(node, limits, queriesByCity, ans) {
  let left = 0;
  let right = limits.length - 1;
  let mid;
  for (let j = 0; j < queriesByCity[node.dest].length; j++) {
    let q = queriesByCity[node.dest][j];
    left = 0;
    right = limits.length - 1;
    while (left < right) {
      mid = (left + right + 1) >> 1;
      if (limits[mid] > q.W) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    ans[q.i] = query(0, limits.length - 1, left);
  }
}

function computeFrom(parent, node, map, limits, queriesByCity, ans) {
  let left = 0;
  let right = limits.length - 1;
  let mid;
  setAnsFor(node, limits, queriesByCity, ans);
  for (let i = 0; i < map[node.dest].length; i++) {
    let child = map[node.dest][i];
    if (child.dest != parent) {
      left = 0;
      right = limits.length - 1;
      while (left < right) {
        mid = (left + right + 1) >> 1;
        if (limits[mid] > child.L) {
          right = mid - 1;
        } else {
          left = mid;
        }
      }
      update(child.A, 0, limits.length - 1, left);
      computeFrom(node.dest, child, map, limits, queriesByCity, ans);
      update(0n, 0, limits.length - 1, left);
    }
  }
}

function gcd(a, b) {
  while (b != 0n) {
    [a, b] = [b, a % b];
  }
  return a;
}

function update(addValue, start, end, at, node = 0) {
  if (at <= start && end <= at) {
    segmentTree[node] = addValue;
    return;
  }
  let mid = (start + end) >> 1;
  if (at <= mid) {
    let leftChildNode = (node << 1) | 1;
    update(addValue, start, mid, at, leftChildNode);
  } else {
    let rightChildNode = (node + 1) << 1;
    update(addValue, mid + 1, end, at, rightChildNode);
  }
  pushUp(node);
}

function query(start, end, until, node = 0) {
  if (until < start || end < 0) {
    return 0;
  }
  if (0 <= start && end <= until) {
    return segmentTree[node];
  }
  let mid = (start + end) >> 1;

  let leftChildNode = (node << 1) | 1;
  let rightChildNode = (node + 1) << 1;
  return gcd(query(start, mid, until, leftChildNode), query(mid + 1, end, until, rightChildNode));
}

function pushUp(node) {
  let leftChildNode = (node << 1) | 1;
  let rightChildNode = (node + 1) << 1;

  segmentTree[node] = gcd(segmentTree[leftChildNode], segmentTree[rightChildNode]);
}
