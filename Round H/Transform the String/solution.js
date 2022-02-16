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
    let S = readLine()
      .split('')
      .map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0));
    let F = readLine()
      .split('')
      .map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0));

    let ans = 0;
    for (let i = 0; i < S.length; i++) {
      let min = Infinity;
      for (let j = 0; j < F.length; j++) {
        min = Math.min(min, getDist(S[i], F[j]));
      }
      ans += min;
    }
    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function getDist(a, b) {
  [a, b] = [a, b].sort((a, b) => a - b);
  return Math.min(b - a, a + 26 - b);
}
