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
    let [N, D, C, M] = readLine().split(/\s+/).map(Number);
    let line = readLine();
    let i;
    for (i = 0; i < N; i++) {
      if (line[i] === 'C') {
        if (C <= 0) {
          break;
        }
        C--;
      }
      if (line[i] === 'D') {
        if (D <= 0) {
          break;
        }
        D--;
        C += M;
      }
    }
    let ans = line
      .substr(i)
      .split('')
      .some((c) => c === 'D')
      ? 'NO'
      : 'YES';
    console.log(`Case #${t + 1}: ${ans}`);
  }
}
