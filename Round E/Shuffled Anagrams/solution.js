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
    let str = readLine();
    let ans = getAnagram(str);
    console.log(`Case #${t + 1}: ${ans}`);
  }
}

function getAnagram(str) {
  let copystr = str
    .split('')
    .sort()
    .join('')
    .match(/(\w)\1*/g);

  if (copystr.some((s) => s.length > Math.floor(str.length / 2))) {
    return 'IMPOSSIBLE';
  }
  let a = copystr.join('');
  let b = a.substr(Math.floor(str.length / 2)) + a.substr(0, Math.floor(str.length / 2));
  let used = Array(str.length).fill(false);
  let anagram = Array(str.length).fill('');

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (a[i] === str[j] && !used[j]) {
        used[j] = true;
        anagram[j] = b[i];
        break;
      }
    }
  }
  return anagram.join('');
}
