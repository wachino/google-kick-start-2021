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
    let [n, k] = readLine().split(' ').map(Number);
    let s = readLine();

    console.log(`Case #${t + 1}: ${Math.abs(computeGoodness(s) - k)}`);
  }
}

function computeGoodness(s) {
  let score = 0;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      score++;
    }
  }
  return score;
}
