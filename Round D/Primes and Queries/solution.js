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
    let [N, Q, P] = readLine().split(/\s+/);
    N = Number(N);
    Q = Number(Q);
    P = BigInt(P);
    let ans = [];
    let A = readLine().split(/\s+/).map(BigInt);

    let vSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0n);
    let vMinusModSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0n);
    let vPlusModSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0n);
    let nonDivisibleSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0n);
    buildSegmentTree(vSegmentTree, 0, N - 1, 0, A, (el) => mapToV(el, P));
    buildSegmentTree(vMinusModSegmentTree, 0, N - 1, 0, A, (el) =>
      el % P ? mapToV(el - (el % P), P) : 0n
    );
    buildSegmentTree(vPlusModSegmentTree, 0, N - 1, 0, A, (el) =>
      el % P && (el - (el % P)) % 4n ? mapToV(el + (el % P), P) - 1n : 0n
    );
    buildSegmentTree(nonDivisibleSegmentTree, 0, N - 1, 0, A, (el) =>
      el % P && el !== el % P ? 1n : 0n
    );
    for (let i = 0; i < Q; i++) {
      let q = readLine().split(/\s+/);
      if (q[0] === '1') {
        let [, pos, val] = q;
        pos = Number(pos) - 1;
        val = BigInt(val);
        A[pos] = val;
        // Update segment trees
        update(vSegmentTree, 0, N - 1, pos, 0, mapToV(val, P));
        update(vMinusModSegmentTree, 0, N - 1, pos, 0, val % P ? mapToV(val - (val % P), P) : 0n);
        update(
          vPlusModSegmentTree,
          0,
          N - 1,
          pos,
          0,
          val % P && (val - (val % P)) % 4n ? mapToV(val + (val % P), P) - 1n : 0n
        );
        update(nonDivisibleSegmentTree, 0, N - 1, pos, 0, val % P && val !== val % P ? 1n : 0n);
      } else if (q[0] === '2') {
        let [, S, L, R] = q;
        S = BigInt(S);
        L = Number(L) - 1;
        R = Number(R) - 1;
        // Query segment trees
        let sum = S * query(vSegmentTree, 0, N - 1, L, R, 0);
        sum += query(vMinusModSegmentTree, 0, N - 1, L, R, 0);
        sum += mapToV(S, P) * query(nonDivisibleSegmentTree, 0, N - 1, L, R, 0);
        if (P == 2n && S % 2n === 0n) {
          sum += query(vPlusModSegmentTree, 0, N - 1, L, R, 0);
        }
        ans.push(sum);
      }
    }

    console.log(`Case #${t + 1}: ${ans.join(' ')}`);
  }
}

function mapToV(n, p) {
  let v = 0n;
  while (n !== 0n && n % p === 0n) {
    n /= p;
    v++;
  }
  return v;
}

function buildSegmentTree(segmentTree, start, end, node, arr, fun) {
  if (start === end) {
    segmentTree[node] = fun(arr[start]);
  } else {
    let mid = (start + end) >> 1;
    let leftChildNode = (node << 1) | 1;
    let rightChildNode = (node + 1) << 1;
    buildSegmentTree(segmentTree, start, mid, leftChildNode, arr, fun);
    buildSegmentTree(segmentTree, mid + 1, end, rightChildNode, arr, fun);
    segmentTree[node] = segmentTree[leftChildNode] + segmentTree[rightChildNode];
  }
}

function update(segmentTree, start, end, at, node, val) {
  if (start > end || at < start || at > end) {
    return;
  }
  if (start === end && end === at) {
    segmentTree[node] = val;
    return;
  }

  let mid = (start + end) >> 1;
  let leftChildNode = (node << 1) | 1;
  let rightChildNode = (node + 1) << 1;
  if (at <= mid) update(segmentTree, start, mid, at, leftChildNode, val);
  if (at > mid) update(segmentTree, mid + 1, end, at, rightChildNode, val);

  pushUp(segmentTree, node);
}

function pushUp(segmentTree, node) {
  let leftChildNode = (node << 1) | 1;
  let rightChildNode = (node + 1) << 1;
  segmentTree[node] = (segmentTree[leftChildNode] || 0n) + (segmentTree[rightChildNode] || 0n);
}

function query(segmentTree, start, end, left, right, node) {
  if (right < start || end < left) {
    return 0n;
  }
  if (left <= start && end <= right) {
    return segmentTree[node];
  }
  let mid = (start + end) >> 1;

  let leftChildNode = (node << 1) | 1;
  let rightChildNode = (node + 1) << 1;
  return (
    query(segmentTree, start, mid, left, right, leftChildNode) +
    query(segmentTree, mid + 1, end, left, right, rightChildNode)
  );
}
