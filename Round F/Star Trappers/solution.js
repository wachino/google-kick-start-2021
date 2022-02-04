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
    let N = Number(readLine());
    let stars = [];
    for (let i = 0; i < N; i++) {
      let [x, y] = readLine().split(/\s+/).map(Number);
      stars.push({ x, y, angle: 0, toDiagonal: true });
    }
    let [x, y] = readLine().split(/\s+/).map(Number);
    let blueStar = { x, y };
    for (let i = 0; i < N; i++) {
      stars[i].angle = getPolarAngle(blueStar, stars[i]);
    }
    stars.sort((a, b) => a.angle - b.angle);

    let lastPoint = stars[0];
    for (let i = 1; i < stars.length; i++) {
      if (Math.abs(stars[i].angle - lastPoint.angle) < 1e-6) {
        if (getDistance(blueStar, lastPoint) < getDistance(blueStar, stars[i])) {
          stars[i].toDiagonal = false;
        } else {
          lastPoint.toDiagonal = false;
          lastPoint = stars[i];
        }
      } else {
        lastPoint = stars[i];
      }
    }
    let tryDiagonals = stars.filter((s) => s.toDiagonal && s.angle < Math.PI);
    let endDiagonals = stars.filter((s) => s.toDiagonal && s.angle >= Math.PI);
    let diagonals = [];
    for (let i = 0; i < tryDiagonals.length; i++) {
      let ed = endDiagonals.find((s) => Math.abs(tryDiagonals[i].angle + Math.PI - s.angle) < 1e-6);
      if (ed) {
        diagonals.push({ da1: tryDiagonals[i], da2: ed });
      }
    }
    let ans = getMinPerimeterTriangleContains(stars, blueStar);
    let minQuad = getMinQuad(diagonals);
    if (minQuad !== -1 && (ans == -1 || minQuad < ans)) {
      ans = minQuad;
    }
    console.log(`Case #${t + 1}: ${ans === -1 ? 'IMPOSSIBLE' : ans}`);
  }
}

function getMinQuad(diagonals) {
  let sol = -1;
  for (let i = 0; i < diagonals.length; i++) {
    for (let j = i + 1; j < diagonals.length; j++) {
      let per = getPerimeterQuad(
        diagonals[i].da1,
        diagonals[i].da2,
        diagonals[j].da1,
        diagonals[j].da2
      );
      if (sol === -1 || per < sol) {
        sol = per;
      }
    }
  }

  return sol;
}

function getPerimeterQuad(da1, da2, db1, db2) {
  return (
    getDistance(da1, db1) + getDistance(da1, db2) + getDistance(da2, db1) + getDistance(da2, db2)
  );
}

function getDistance(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
function getMinPerimeterTriangleContains(stars, p) {
  let sol = -1;
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      for (let k = j + 1; k < stars.length; k++) {
        if (pointInTriangle(p, stars[i], stars[j], stars[k])) {
          let perimeter =
            getDistance(stars[i], stars[j]) +
            getDistance(stars[k], stars[j]) +
            getDistance(stars[i], stars[k]);
          if (sol == -1 || perimeter < sol) {
            sol = perimeter;
          }
        }
      }
    }
  }

  return sol;
}

function getPolarAngle(a, b) {
  let x = b.x - a.x;
  let y = b.y - a.y;
  let angle = Math.atan2(y, x);
  return angle < 0 ? angle + 2 * Math.PI : angle;
}
function sign(p1, p2, p3) {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function pointInTriangle(pt, v1, v2, v3) {
  let d1, d2, d3;
  let has_neg, has_pos;

  d1 = sign(pt, v1, v2);
  d2 = sign(pt, v2, v3);
  d3 = sign(pt, v3, v1);

  has_neg = d1 < 0 && d2 < 0 && d3 < 0;
  has_pos = d1 > 0 && d2 > 0 && d3 > 0;

  return has_neg || has_pos;
}
