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
    let [N, M] = readLine().split(/\s+/).map(Number);
    let cw = [];
    let horizontalWords = [];
    let verticalWords = [];
    let map = Array(N)
      .fill(null)
      .map(() => Array(M).fill(null));

    for (let i = 0; i < N; i++) {
      cw.push(readLine());
    }
    for (let i = 0; i < N; i++) {
      horizontalWords.push(...cw[i].split('#').filter(Boolean));
      cw[i] = cw[i].split('');
    }
    let tcw = transpose(cw).map((r) => r.join(''));
    for (let i = 0; i < M; i++) {
      verticalWords.push(...tcw[i].split('#').filter(Boolean));
    }
    let w = -1;
    let blackFound = true;
    let p = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (cw[i][j] === '#') {
          blackFound = true;
          p = 0;
          continue;
        } else {
          if (blackFound) {
            w++;
            blackFound = false;
          }
          if (!map[i][j]) {
            map[i][j] = [];
          }
          map[i][j].push({ isHorizontal: true, arr: horizontalWords, idx: w, p });
          p++;
        }
      }
      blackFound = true;
      p = 0;
    }
    w = -1;
    blackFound = true;
    p = 0;
    for (let j = 0; j < M; j++) {
      for (let i = 0; i < N; i++) {
        if (cw[i][j] === '#') {
          blackFound = true;
          p = 0;
          continue;
        } else {
          if (blackFound) {
            w++;
            blackFound = false;
          }
          if (!map[i][j]) {
            map[i][j] = [];
          }
          map[i][j].push({ isHorizontal: false, arr: verticalWords, idx: w, p });
          p++;
        }
      }
      blackFound = true;
      p = 0;
    }

    let stack = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (/[A-Z]/.test(cw[i][j])) {
          stack.push({ i, j });
        }
      }
    }
    let fills = 0;
    while (stack.length) {
      let { i, j } = stack.pop();
      let ws = map[i][j];
      for (let k = 0; k < ws.length; k++) {
        let wk = ws[k];
        if (canFill(wk.arr[wk.idx], wk.p)) {
          fills++;
          let mirrorSteps = getStepsToMirror(wk.arr[wk.idx], wk.p);
          wk.arr[wk.idx] = replaceAt(wk.arr[wk.idx], wk.p + mirrorSteps, wk.arr[wk.idx][wk.p]);
          let ni = wk.isHorizontal ? i : i + mirrorSteps;
          let nj = wk.isHorizontal ? j + mirrorSteps : j;
          cw[ni][nj] = wk.arr[wk.idx][wk.p];

          stack.push({ i: ni, j: nj });
          let f = map[ni][nj] && map[ni][nj].find((m) => m.isHorizontal !== wk.isHorizontal);
          if (f) {
            f.arr[f.idx] = replaceAt(f.arr[f.idx], f.p, wk.arr[wk.idx][wk.p]);
          }
        }
      }
    }

    console.log(`Case #${t + 1}: ${fills}`);
    for (let i = 0; i < N; i++) {
      console.log(cw[i].join(''));
    }
  }
}

function getStepsToMirror(word, position) {
  return word.length - 1 - 2 * position;
}

function canFill(word, position) {
  return word[position] !== '.' && word[position + getStepsToMirror(word, position)] === '.';
}

function transpose(arr) {
  return arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));
}

function replaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
