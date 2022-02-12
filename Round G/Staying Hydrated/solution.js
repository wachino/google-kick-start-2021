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
    let horizontal = new Set();
    let horizontalL = [];
    let horizontalR = [];
    let vertical = new Set();
    let verticalD = [];
    let verticalU = [];
    let K = Number(readLine());
    for (let i = 0; i < K; i++) {
      let [x1, y1, x2, y2] = readLine().split(/\s+/).map(Number);
      horizontal.add(x1);
      horizontal.add(x2);
      horizontalL.push(x1);
      horizontalR.push(x2);
      vertical.add(y1);
      vertical.add(y2);
      verticalD.push(y1);
      verticalU.push(y2);
    }

    horizontal = [...horizontal];
    vertical = [...vertical];

    horizontal.sort((a, b) => b - a);
    horizontalL.sort((a, b) => b - a);
    horizontalR.sort((a, b) => a - b);
    vertical.sort((a, b) => b - a);
    verticalD.sort((a, b) => b - a);
    verticalU.sort((a, b) => a - b);

    let leftSum = horizontal.map(() => 0);
    let rightSum = horizontal.map(() => 0);

    let s = 0;
    let count = 0;
    let sum = 0;
    let last = -1;
    for (let i = 0; i < horizontal.length; i++) {
      let h = horizontal[i];
      sum += (last - h) * count;
      rightSum[i] = sum;
      last = h;
      while (s < horizontalL.length && horizontalL[s] == h) {
        s++;
        count++;
      }
    }
    rightSum.reverse();
    horizontal.reverse();

    let e = 0;
    count = 0;
    sum = 0;
    last = -1;
    for (let i = 0; i < horizontal.length; i++) {
      let h = horizontal[i];
      sum += (h - last) * count;
      leftSum[i] = sum;
      last = h;
      while (e < horizontalR.length && horizontalR[e] == h) {
        e++;
        count++;
      }
    }

    let minX = undefined;
    let minXsum = -1;
    for (let i = 0; i < horizontal.length; i++) {
      if (minX === undefined || leftSum[i] + rightSum[i] < minXsum) {
        minXsum = leftSum[i] + rightSum[i];
        minX = horizontal[i];
      }
    }

    let downSum = vertical.map(() => 0);
    let upSum = vertical.map(() => 0);

    s = 0;
    count = 0;
    sum = 0;
    last = -1;
    for (let i = 0; i < vertical.length; i++) {
      let v = vertical[i];
      sum += (last - v) * count;
      upSum[i] = sum;
      last = v;
      while (s < verticalD.length && verticalD[s] == v) {
        s++;
        count++;
      }
    }
    upSum.reverse();

    vertical.reverse();
    e = 0;
    count = 0;
    sum = 0;
    last = -1;
    for (let i = 0; i < vertical.length; i++) {
      let v = vertical[i];
      sum += (v - last) * count;
      downSum[i] = sum;
      last = v;
      while (e < verticalU.length && verticalU[e] == v) {
        e++;
        count++;
      }
    }

    let minY = undefined;
    let minYsum = -1;
    for (let i = 0; i < vertical.length; i++) {
      if (minY === undefined || downSum[i] + upSum[i] < minYsum) {
        minYsum = downSum[i] + upSum[i];
        minY = vertical[i];
      }
    }
    console.log(`Case #${t + 1}: ${minX} ${minY}`);
  }
}
