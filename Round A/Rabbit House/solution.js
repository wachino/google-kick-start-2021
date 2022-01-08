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

    console.log(`Case #${t + 1}: ${countBlocks(grid)}`);
  }
}

function getNeigh(map, { r, c }) {
  return [map[r - 1] && map[r - 1][c], map[r][c - 1], map[r][c + 1], map[r + 1] && map[r + 1][c]]
    .filter(Boolean)
    .filter((c) => !c.visited);
}

function countBlocks(grid) {
  let cells = [];
  let map = grid.map((r) => r.map(() => null));
  let sol = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      cells.push({
        r,
        c,
        h: grid[r][c],
      });
      map[r][c] = {
        r,
        c,
        h: grid[r][c],
        visited: false,
      };
    }
  }
  cells.sort((a, b) => a.h - b.h);
  while (cells.length) {
    let current = cells.pop();
    if (current.h != map[current.r][current.c].h || map[current.r][current.c].visited) {
      continue;
    }
    map[current.r][current.c].visited = true;
    let n = getNeigh(map, current);
    for (let i = 0; i < n.length; i++) {
      let nh = Math.max(n[i].h, current.h - 1);
      let d = Math.max(0, nh - n[i].h);
      if (d > 0) {
        sol += d;
        map[n[i].r][n[i].c].h = nh;
        let w = whereToInsertBinary(cells, nh);
        cells.splice(w, 0, { r: n[i].r, c: n[i].c, h: nh });
      }
    }
  }
  return sol;
}

function whereToInsertBinary(list, element) {
  let left = 0;
  let right = list.length;
  let m;
  while (left < right) {
    m = Math.floor((left + right) / 2);
    if (element < list[m].h) {
      right = m;
    } else {
      left = m + 1;
    }
  }
  return left;
}
