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

function areInSerie(a, b, c) {
  return 2 * b - a === c;
}
function solution() {
  const T = Number(readLine());
  for (let t = 0; t < T; t++) {
    let a = readLine().split(/\s+/).map(Number);
    let b = readLine().split(/\s+/).map(Number);
    let c = readLine().split(/\s+/).map(Number);
    let dic = {};
    let ind = 0;
    if (areInSerie(a[0], a[1], a[2])) {
      ind++;
    }
    if (areInSerie(c[0], c[1], c[2])) {
      ind++;
    }
    if (areInSerie(a[0], b[0], c[0])) {
      ind++;
    }
    if (areInSerie(a[2], b[1], c[2])) {
      ind++;
    }
    if (areInSerie(a[0], Math.floor((a[0] + c[2]) / 2), c[2])) {
      dic[Math.floor((a[0] + c[2]) / 2)] = -~dic[Math.floor((a[0] + c[2]) / 2)];
    }
    if (areInSerie(c[0], Math.floor((c[0] + a[2]) / 2), a[2])) {
      dic[Math.floor((c[0] + a[2]) / 2)] = -~dic[Math.floor((c[0] + a[2]) / 2)];
    }
    if (areInSerie(b[0], Math.floor((b[0] + b[1]) / 2), b[1])) {
      dic[Math.floor((b[0] + b[1]) / 2)] = -~dic[Math.floor((b[0] + b[1]) / 2)];
    }
    if (areInSerie(a[1], Math.floor((a[1] + c[1]) / 2), c[1])) {
      dic[Math.floor((a[1] + c[1]) / 2)] = -~dic[Math.floor((a[1] + c[1]) / 2)];
    }
    console.log(`Case #${t + 1}: ${Math.max(0, ...Object.values(dic)) + ind}`);
  }
}
