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
    let [N, K] = readLine().split(/\s+/).map(Number);
    let B = readLine().split(/\s+/).map(Number);
    let best = Array(K + 1).fill(Infinity);
    best[0] = 0;
    let ans = Infinity;
    for (let i = 0; i < N; i++) {
      let currSum = 0;
      for (let j = i; j < N; j++) {
        currSum += B[j];
        if (currSum <= K) {
          ans = Math.min(ans, j - i + 1 + best[K - currSum]);
        }
      }
      let bestSum = 0;
      for (let j = i; j >= 0; j--) {
        bestSum += B[j];
        if (bestSum <= K) {
          best[bestSum] = Math.min(best[bestSum], i - j + 1);
        }
      }
    }
    console.log(`Case #${t + 1}: ${Number.isFinite(ans) ? ans : -1}`);
  }
}
