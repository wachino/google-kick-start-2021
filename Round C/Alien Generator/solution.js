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
    const G = Number(readLine());
    let ans = 0;
    for (let k = 0; k <= Math.sqrt(2 * G); k++) {
      if (
        (2 * G - k * k - k) % (2 * (k + 1)) === 0 &&
        (2 * G - k * k - k) / (2 * (k + 1)) >= 1 &&
        (2 * G - k * k - k) / (2 * (k + 1)) <= G
      ) {
        ans++;
      }
    }
    console.log(`Case #${t + 1}: ${ans}`);
  }
}
