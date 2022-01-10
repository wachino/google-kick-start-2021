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
    const str = readLine()
      .split('')
      .map((c) => c.charCodeAt(0) - 'A'.charCodeAt(0));

    let currLength = 1;
    let ans = [1];
    for (let i = 1; i < str.length; i++) {
      if (str[i] > str[i - 1]) {
        currLength++;
      } else {
        currLength = 1;
      }
      ans.push(currLength);
    }

    console.log(`Case #${t + 1}: ${ans.join(' ')}`);
  }
}
