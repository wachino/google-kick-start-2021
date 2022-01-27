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
    let [R, C, K] = readLine().split(/\s+/).map(Number);
    let [r1, c1, r2, c2] = readLine().split(/\s+/).map(Number);
    let topRowDist = Math.min(r1 - 1, r2 - 1);
    let bottomRowDist = Math.min(R - r1, R - r2);
    let leftColDist = Math.min(c1 - 1, c2 - 1);
    let rightColDist = Math.min(C - c1, C - c2);
    let n = Math.abs(r1 - r2) + 1;
    let m = Math.abs(c1 - c2) + 1;
    let ans = n * m - 1 + Math.floor((n - 1) / K) * Math.floor((m - 1) / K);
    if (Math.max(topRowDist, bottomRowDist, leftColDist, rightColDist) > 0) {
      let a = topRowDist === 0 ? 0 : m;
      let b = bottomRowDist === 0 ? 0 : m;
      let c = leftColDist === 0 ? 0 : n;
      let d = rightColDist === 0 ? 0 : n;

      ans += Math.min(
        getCutsFor([c, d, a, b + leftColDist], K),
        getCutsFor([c, d, b, a + rightColDist], K),
        getCutsFor([a, b, c, d + topRowDist], K),
        getCutsFor([a, b, d, c + bottomRowDist], K)
      );
    }

    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function getCutsFor(lengths, K) {
  return lengths.map((l) => Math.ceil(l / K)).reduce((a, b) => a + b);
}
