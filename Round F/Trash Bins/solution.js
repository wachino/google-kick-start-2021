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
    let N = Number(readLine());
    let street = readLine();

    let dist = Array(N).fill(null);
    let last = null;
    for (let i = 0; i < N; i++) {
      if (last != null) {
        last++;
      }
      if (street[i] === '1') {
        last = 0;
      }
      if (last != null && (dist[i] === null || last < dist[i])) {
        dist[i] = last;
      }
    }

    last = null;
    for (let i = N - 1; i >= 0; i--) {
      if (last != null) {
        last++;
      }
      if (street[i] === '1') {
        last = 0;
      }
      if (last != null && (dist[i] === null || last < dist[i])) {
        dist[i] = last;
      }
    }

    let ans = dist.reduce((a, b) => a + b);
    console.log(`Case #${t + 1}: ${ans}`);
  }
}
