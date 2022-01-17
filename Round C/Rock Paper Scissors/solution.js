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
let v = Array(61)
  .fill(null)
  .map(() =>
    Array(61)
      .fill(null)
      .map(() => Array(61).fill(null))
  );
function getMax(r, p, s, W, E) {
  if (v[r][p][s] === null) {
    let n = r + p + s;
    let posibles = [];
    if (r > 0) {
      let value = getMax(r - 1, p, s, W, E).value + (p * W) / (n - 1) + (s * E) / (n - 1);
      posibles.push({ step: 'R', value });
    }
    if (p > 0) {
      let value = getMax(r, p - 1, s, W, E).value + (s * W) / (n - 1) + (r * E) / (n - 1);
      posibles.push({ step: 'P', value });
    }
    if (s > 0) {
      let value = getMax(r, p, s - 1, W, E).value + (r * W) / (n - 1) + (p * E) / (n - 1);
      posibles.push({ step: 'S', value });
    }
    let maxV = Math.max(...posibles.map((i) => i.value));
    let sol = posibles.find((i) => i.value === maxV);
    v[r][p][s] = sol;
  }
  return v[r][p][s];
}
function getPath(r, p, s) {
  if (r === 0 && p === 0 && s === 0) {
    return [];
  }
  let { step } = v[r][p][s];
  let nr = step === 'R' ? r - 1 : r;
  let np = step === 'P' ? p - 1 : p;
  let ns = step === 'S' ? s - 1 : s;
  return [...getPath(nr, np, ns), step];
}
function solution() {
  const T = Number(readLine());
  const X = Number(readLine());
  for (let t = 0; t < T; t++) {
    let [W, E] = readLine().split(/\s+/).map(Number);
    v = Array(61)
      .fill(null)
      .map(() =>
        Array(61)
          .fill(null)
          .map(() => Array(61).fill(null))
      );
    v[0][0][0] = { step: '', value: 0 };
    v[1][0][0] = { step: 'R', value: W / 3 + E / 3 };
    v[0][1][0] = { step: 'P', value: W / 3 + E / 3 };
    v[0][0][1] = { step: 'S', value: W / 3 + E / 3 };
    let maxValue = null;
    let maxR = 0;
    let maxP = 0;
    let maxS = 0;
    for (let i = 0; i <= 60; i++) {
      for (let j = 0; j + i <= 60; j++) {
        let k = 60 - j - i;
        let { value } = getMax(i, j, k, W, E);
        if (maxValue === null || maxValue < value) {
          maxValue = value;
          maxR = i;
          maxP = j;
          maxS = k;
        }
      }
    }
    let path = getPath(maxR, maxP, maxS);
    console.log(`Case #${t + 1}: ${path.join('')}`);
  }
}
