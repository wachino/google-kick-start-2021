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
    let [N, C] = readLine().split(/\s+/).map(BigInt);
    let points = new Set();
    let starts = [];
    let ends = [];
    for (let i = 0; i < N; i++) {
      let [L, R] = readLine().split(/\s+/).map(BigInt);
      if (L + 1n < R) {
        points.add(L + 1n);
        points.add(R);
        starts.push(L + 1n);
        ends.push(R);
      }
    }
    points = [...points];
    points.sort(sortBigInt);
    starts.sort(sortBigInt);
    ends.sort(sortBigInt);
    let counting = Array(points.length - 1).fill(null);
    for (let i = 0; i < points.length - 1; i++) {
      counting[i] = { count: 0n, length: points[i + 1] - points[i] };
    }

    let currInts = 0n;
    let s = 0;
    let e = 0;
    for (let i = 0; i < counting.length; i++) {
      let p = points[i];
      while (s < starts.length && starts[s] === p) {
        currInts++;
        s++;
      }
      while (e < ends.length && ends[e] === p) {
        currInts--;
        e++;
      }

      counting[i].count += currInts;
    }
    counting.sort((a, b) => sortBigInt(b.count, a.count));
    let cuts = 0n;
    let i = 0;
    let ans = N;
    while (i < counting.length && cuts < C) {
      let nextCut = C - cuts < counting[i].length ? C - cuts : counting[i].length;
      cuts += nextCut;
      ans += nextCut * counting[i].count;
      i++;
    }
    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function sortBigInt(a, b) {
  if (a - b === 0n) return 0;
  if (a - b < 0n) return -1;
  return 1;
}
