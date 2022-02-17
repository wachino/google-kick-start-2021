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
  let paintings = {
    U: [false, false, false],
    R: [true, false, false],
    Y: [false, true, false],
    B: [false, false, true],
    O: [true, true, false],
    P: [true, false, true],
    G: [false, true, true],
    A: [true, true, true],
  };
  for (let t = 0; t < T; t++) {
    let N = Number(readLine());
    let P = readLine();
    let ans = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < P.length; j++) {
        if (j < P.length && paintings[P[j]][i]) {
          ans++;
          while (j < P.length - 1 && paintings[P[j + 1]][i]) {
            j++;
          }
        }
      }
    }

    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function getDist(a, b) {
  [a, b] = [a, b].sort((a, b) => a - b);
  return Math.min(b - a, a + 26 - b);
}
