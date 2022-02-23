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

const MOD = 10n ** 9n + 7n;
let parent;
let level;
let condProb;
let events;
let L = 19;

function solution() {
  const T = Number(readLine());
  for (let t = 0; t < T; t++) {
    let [N, Q] = readLine().split(/\s+/).map(Number);
    let K = BigInt(readLine());
    events = [{ K: { a: K, b: 10n ** 6n } }];

    parent = Array(N)
      .fill(null)
      .map(() => Array(L).fill(null));
    level = Array(N).fill(null);
    level[0] = 0;
    condProb = Array(N)
      .fill(null)
      .map(() => Array(L).fill(null));

    for (let i = 1; i < N; i++) {
      let [P, A, B] = readLine().split(/\s+/).map(Number);
      A = BigInt(A);
      B = BigInt(B);
      events.push({
        parent: P - 1,
        A: { a: A, b: 10n ** 6n },
        B: { a: B, b: 10n ** 6n },
        K: null,
      });
      parent[i][0] = events[i].parent;
      condProb[i][0] = { A: events[i].A, B: events[i].B };
    }

    for (let h = 1; h < L; h++) {
      for (let i = 0; i < N; i++) {
        if (
          parent[i][h - 1] !== null &&
          condProb[i][h - 1] !== null &&
          condProb[parent[i][h - 1]][h - 1] !== null
        ) {
          parent[i][h] = parent[parent[i][h - 1]][h - 1];
          let p1 = condProb[i][h - 1];
          let p2 = condProb[parent[i][h - 1]][h - 1];
          let Agp = sumFrac(mulFrac(p1.A, p2.A), mulFrac(compFrac(p2.A), p1.B));
          let Bgp = sumFrac(mulFrac(p1.A, p2.B), mulFrac(compFrac(p2.B), p1.B));
          condProb[i][h] = { A: Agp, B: Bgp };
        }
      }
    }
    let ans = [];
    for (let i = 0; i < Q; i++) {
      let [u, v] = readLine()
        .split(/\s+/)
        .map((l) => Number(l) - 1);
      let lca = getLca(u, v);

      let p = getProbCond(u, lca);
      let q = getProbCond(v, lca);
      let r = getProbOfEvent(lca);

      let sol = sumFrac(mulFrac(mulFrac(p.A, q.A), r.K), mulFrac(mulFrac(p.B, q.B), compFrac(r.K)));

      ans.push((modInverse(sol.b, MOD) * sol.a) % MOD);
    }

    console.log(`Case #${t + 1}: ${ans.join(' ')}`);
  }
}

function getProbCond(child, grandpa) {
  let probs = [];
  for (let h = L - 1; h >= 0; h--) {
    if (getLevel(child) - getLevel(grandpa) >= 1 << h) {
      probs.push(condProb[child][h]);
      child = parent[child][h];
    }
  }
  if (!probs.length) {
    return { A: { a: 1n, b: 1n }, B: { a: 0n, b: 1n } };
  }

  let ret = probs.reduce((p1, p2) => {
    let Agp = sumFrac(mulFrac(p1.A, p2.A), mulFrac(compFrac(p2.A), p1.B));
    let Bgp = sumFrac(mulFrac(p1.A, p2.B), mulFrac(compFrac(p2.B), p1.B));
    return { A: Agp, B: Bgp };
  });

  return ret;
}

function getLca(u, v) {
  let lu = getLevel(u);
  let lv = getLevel(v);

  if (lv > lu) {
    [u, v] = [v, u];
  }
  for (let h = L - 1; h >= 0; h--) {
    if (getLevel(u) - getLevel(v) >= 1 << h) {
      u = parent[u][h];
    }
  }
  if (u == v) {
    return u;
  }

  for (let h = L - 1; h >= 0; h--) {
    if (parent[u][h] != parent[v][h]) {
      u = parent[u][h];
      v = parent[v][h];
    }
  }
  return parent[u][0];
}

function compFrac(x) {
  return { a: (x.b - x.a + MOD) % MOD, b: x.b };
}
function sumFrac(x, y) {
  let a = (((x.a * y.b) % MOD) + ((y.a * x.b) % MOD)) % MOD;
  let b = (x.b * y.b) % MOD;
  return { a, b };
}

function mulFrac(x, y) {
  let a = (x.a * y.a) % MOD;
  let b = (x.b * y.b) % MOD;
  return { a, b };
}

function getLevel(n) {
  let q = [];
  if (level[n] === null) {
    q.push(n);
  }
  while (q.length) {
    let p = q[q.length - 1];
    if (level[events[p].parent] === null) {
      q.push(events[p].parent);
    } else {
      q.pop();
      level[p] = level[events[p].parent] + 1;
    }
  }

  return level[n];
}

function getProbOfEvent(n) {
  let q = [];
  if (events[n].K === null) {
    q.push(n);
  }

  while (q.length) {
    let e = q[q.length - 1];
    if (events[events[e].parent].K === null) {
      q.push(events[e].parent);
    } else {
      q.pop();
      let { K: Kparent } = getProbOfEvent(events[e].parent);
      let K = (events[e].A.a * Kparent.a) % MOD;
      let Kden = (10n ** 6n * Kparent.b) % MOD;
      K = (K + ((events[e].B.a * ((Kparent.b - Kparent.a + MOD) % MOD)) % MOD)) % MOD;
      events[e].K = { a: K, b: Kden };
    }
  }

  return events[n];
}

function modInverse(a, m) {
  let m0 = m;
  let y = 0n;
  let x = 1n;

  if (m == 1n) {
    return 0n;
  }

  while (a > 1) {
    let q = a / m;
    let t = m;

    m = a % m;
    a = t;
    t = y;

    y = x - q * y;
    x = t;
  }

  if (x < 0n) {
    x += m0;
  }

  return x;
}
