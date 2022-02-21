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
    let S = readLine().split('').map(Number);
    let pointers = Array(10)
      .fill()
      .map(() => new Set());
    let head;
    let last = null;
    for (let i = 0; i < N; i++) {
      let curr = {
        prev: last,
        next: null,
        val: S[i],
      };
      if (i === 0) {
        head = curr;
      }
      if (last) {
        last.next = curr;
        if (last.val === (curr.val + 9) % 10) {
          pointers[curr.val].add(curr);
        }
      }
      last = curr;
    }
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = 1; i <= 10; i++) {
        let currSet = pointers[i % 10];
        for (let node of currSet) {
          if (node.prev) {
            let prev = node.prev;
            if (prev.val === i - 1) {
              pointers[prev.val].delete(prev);
              changed = true;
              node.prev = prev.prev;
              if (node.prev) {
                node.prev.next = node;
              } else {
                head = node;
              }
              prev.prev = null;
              prev.next = null;
              node.val = (i + 1) % 10;
              currSet.delete(node);
              if (node.prev && node.prev.val == (node.val + 9) % 10) {
                pointers[node.val].add(node);
              }
              if (node.next && node.next.val === (node.val + 1) % 10) {
                pointers[node.next.val].add(node.next);
              }
            }
          }
        }
      }
    }
    let ans = [];
    while (head) {
      ans.push(head.val);
      head = head.next;
    }
    console.log(`Case #${t + 1}: ${ans.join('')}`);
  }
}
