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
    let [N, M, K] = readLine().split(/\s+/).map(Number);
    let rooms = [];
    let pointsByCombination = Array(2 ** N).fill(0);
    let adjacent = Array(N).fill(0);
    let canVisit = Array(2 ** N)
      .fill(0)
      .map(() => Array(N).fill(false));
    let waysOfVisiting = Array(2 ** N).fill(-1);
    for (let i = 0; i < N; i++) {
      let [l, r, a] = readLine().split(/\s+/).map(Number);
      rooms.push({ l, r, a });
      waysOfVisiting[1 << i] = 1;
    }
    for (let i = 0; i < M; i++) {
      let [x, y] = readLine().split(/\s+/).map(Number);
      adjacent[x] = adjacent[x] | (1 << y);
      adjacent[y] = adjacent[y] | (1 << x);
    }
    for (let i = 0; i < 2 ** N; i++) {
      for (let j = 0; j < N; j++) {
        if (i & (1 << j)) {
          pointsByCombination[i] += rooms[j].a;
        }
      }
    }
    for (let i = 0; i < 2 ** N; i++) {
      for (let j = 0; j < N; j++) {
        if (
          i === 0 ||
          (i & adjacent[j] &&
            pointsByCombination[i] >= rooms[j].l &&
            pointsByCombination[i] <= rooms[j].r)
        ) {
          canVisit[i][j] = true;
        }
      }
    }
    let ans = 0;
    for (let i = 0; i < 2 ** N; i++) {
      if (pointsByCombination[i] === K) {
        ans += getWaysOfVisiting(i, waysOfVisiting, canVisit);
      }
    }

    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function getWaysOfVisiting(c, waysOfVisiting, canVisit) {
  if (waysOfVisiting[c] === -1) {
    let sum = 0;
    for (let i = 0; i < canVisit[0].length; i++) {
      if ((1 << i) & c) {
        let xprima = ~(1 << i) & c;
        if (canVisit[xprima][i]) {
          sum += getWaysOfVisiting(xprima, waysOfVisiting, canVisit);
        }
      }
    }
    waysOfVisiting[c] = sum;
  }
  return waysOfVisiting[c];
}
