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
    let [D, N, K] = readLine().split(/\s+/).map(Number);
    let atractions = [];
    let criticalDays = new Set();
    for (let i = 0; i < N; i++) {
      let [h, s, e] = readLine().split(/\s+/).map(Number);
      atractions.push({ h, s, e, i });
      criticalDays.add(s);
      criticalDays.add(e);
    }
    criticalDays = [...criticalDays].sort((a, b) => a - b);
    atractions.sort((a, b) => b.h - a.h);
    for (let i = 0; i < N; i++) {
      atractions[i].i = i;
    }

    let byStart = atractions.slice().sort((a, b) => a.s - b.s);
    let byEnd = atractions.slice().sort((a, b) => a.e - b.e);

    let openSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0);
    let happinessSegmentTree = Array(2 ** (Math.ceil(Math.log2(N + 1)) + 1)).fill(0);
    let ans = 0;
    let s = 0;
    let e = 0;
    for (let i = 0; i < criticalDays.length; i++) {
      let cd = criticalDays[i];
      while (s < byStart.length && byStart[s].s == cd) {
        update(openSegmentTree, 0, N - 1, byStart[s].i, 0, 1);
        update(happinessSegmentTree, 0, N - 1, byStart[s].i, 0, byStart[s].h);
        s++;
      }
      let R = findOpenAtractions(openSegmentTree, K, N);
      let curr = query(happinessSegmentTree, 0, N - 1, 0, R, 0);
      if (curr > ans) {
        ans = curr;
      }
      while (e < byEnd.length && byEnd[e].e == cd) {
        update(openSegmentTree, 0, N - 1, byEnd[e].i, 0, 0);
        update(happinessSegmentTree, 0, N - 1, byEnd[e].i, 0, 0);
        e++;
      }
    }
    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function findOpenAtractions(openSegmentTree, K, N) {
  let left = 0;
  let right = N - 1;
  let mid = (left + right) >> 1;
  while (left < right) {
    if (query(openSegmentTree, 0, N - 1, 0, mid, 0) < K) {
      left = mid + 1;
    } else {
      right = mid;
    }
    mid = (left + right) >> 1;
  }
  return left;
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
  segmentTree[node] = (segmentTree[leftChildNode] || 0) + (segmentTree[rightChildNode] || 0);
}

function query(segmentTree, start, end, left, right, node) {
  if (right < start || end < left) {
    return 0;
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
