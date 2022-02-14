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
    let [N, A] = readLine().split(/\s+/).map(Number);
    if (A < N - 2) {
      console.log(`Case #${t + 1}: IMPOSSIBLE`);
    } else {
      let x0 = { x: 0, y: A - N + 3 };
      let xu = 1;
      let yu = 1;
      let xd = 0;
      let yd = 1;
      let up = [x0, { x: xu, y: yu }];
      let down = [{ x: 0, y: 0 }];
      for (let i = 0; i < N - 3; i++) {
        switch (i % 4) {
          case 0:
            xd++;
            yd--;
            down.push({ x: xd, y: yd });
            break;
          case 1:
            yu++;
            xu++;
            up.push({ x: xu, y: yu });
            break;
          case 2:
            xd++;
            yd++;
            down.push({ x: xd, y: yd });
            break;
          case 3:
            yu--;
            xu++;
            up.push({ x: xu, y: yu });
            break;
        }
      }
      let ans = [...down, ...up.reverse()];
      console.log(`Case #${t + 1}: POSSIBLE`);
      for (let i = 0; i < ans.length; i++) {
        console.log(`${ans[i].x} ${ans[i].y}`);
      }
    }
  }
}
