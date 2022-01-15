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
  const MOD = 1e9 + 7;
  for (let t = 0; t < T; t++) {
    let [N, K] = readLine().split(/\s+/).map(Number);
    const S = readLine();
    let mid = S.substr(0, Math.ceil(N / 2))
      .split('')
      .reverse()
      .join('');
    let ans = 0;
    let base = 1;
    for (let i = 0; i < mid.length; i++) {
      ans += ((mid.charCodeAt(i) - 'a'.charCodeAt(0)) * base) % MOD;
      ans = ans % MOD;
      base *= K;
      base = base % MOD;
    }
    mid = mid.split('').reverse().join('');
    if (
      mid +
        mid
          .substr(0, Math.floor(N / 2))
          .split('')
          .reverse()
          .join('') <
      S
    ) {
      ans++;
      ans = ans % MOD;
    }

    console.log(`Case #${t + 1}: ${ans}`);
  }
}
