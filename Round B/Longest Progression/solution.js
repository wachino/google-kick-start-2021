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
    const N = Number(readLine());
    const arr = readLine().split(/\s+/).map(Number);

    console.log(`Case #${t + 1}: ${Math.max(getMax(arr), getMax(arr.reverse()))}`);
  }
}

function getMax(arr) {
  let max = 2;
  let curr = [
    {
      subs: null,
      replaces: 0,
      len: 2,
      diff: arr[1] - arr[0],
    },
  ];

  let toRemove = [];
  for (let i = 2; i < arr.length; i++) {
    let found = false;
    for (let j = curr.length - 1; j >= 0; j--) {
      if (
        (curr[j].subs == null && arr[i] - arr[i - 1] == curr[j].diff) ||
        (curr[j].subs != null && arr[i] - curr[j].subs == curr[j].diff)
      ) {
        if (curr[j].subs == null) {
          found = true;
        }
        curr[j].len++;
        curr[j].subs = null;
        if (curr[j].len > max) {
          max = curr[j].len;
        }
      } else {
        if (curr[j].replaces < 1) {
          curr[j].replaces++;
          curr[j].len++;
          curr[j].subs = curr[j].diff + arr[i - 1];
          if (curr[j].len > max) {
            max = curr[j].len;
          }
        } else {
          toRemove.push(j);
        }
      }
    }

    for (let j = 0; j < toRemove.length; j++) {
      curr.splice(toRemove[j], 1);
    }
    toRemove = [];
    if (!found) {
      curr.push({ subs: null, replaces: 0, len: 2, diff: arr[i] - arr[i - 1] });
    }
  }
  return max;
}
