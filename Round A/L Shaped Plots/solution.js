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
    let [r, c] = readLine().split(' ').map(Number);

    let grid = Array(r)
      .fill(null)
      .map(() => readLine().split(' ').map(Number));

    console.log(`Case #${t + 1}: ${countLShapes(grid)}`);
  }
}

function getLeftSum(grid) {
  let ret = grid.map((r) => r.map(() => 0));
  for (let i = 0; i < grid.length; i++) {
    let s = 0;
    for (let j = 0; j < grid[i].length; j++) {
      s = grid[i][j] === 0 ? 0 : s + 1;
      ret[i][j] = s;
    }
  }
  return ret;
}
function getRightSum(grid) {
  let ret = grid.map((r) => r.map(() => 0));
  for (let i = 0; i < grid.length; i++) {
    let s = 0;
    for (let j = grid[i].length - 1; j >= 0; j--) {
      s = grid[i][j] === 0 ? 0 : s + 1;
      ret[i][j] = s;
    }
  }
  return ret;
}
function getUpSum(grid) {
  let ret = grid.map((r) => r.map(() => 0));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      ret[i][j] = grid[i][j] === 0 ? 0 : ((ret[i - 1] && ret[i - 1][j]) | 0) + 1;
    }
  }
  return ret;
}
function getDownSum(grid) {
  let ret = grid.map((r) => r.map(() => 0));
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      ret[i][j] = grid[i][j] === 0 ? 0 : ((ret[i + 1] && ret[i + 1][j]) | 0) + 1;
    }
  }
  return ret;
}
function count(x, y) {
  return (
    Math.max(0, Math.min(Math.floor(x / 2), y) - 1) +
    Math.max(0, Math.min(Math.floor(y / 2), x) - 1)
  );
}
function countLShapes(grid) {
  let leftSum = getLeftSum(grid);
  let rightSum = getRightSum(grid);
  let upSum = getUpSum(grid);
  let downSum = getDownSum(grid);
  let shapes = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      shapes +=
        count(upSum[i][j], leftSum[i][j]) +
        count(upSum[i][j], rightSum[i][j]) +
        count(downSum[i][j], leftSum[i][j]) +
        count(downSum[i][j], rightSum[i][j]);
    }
  }
  return shapes;
}
