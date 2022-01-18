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

function readOperator(expr) {
  return expr[0];
}
function parseOperand(expr) {
  if (expr[0] === '(') {
    return parse(expr);
  } else {
    let v = expr.match(/^\d+/)[0];
    return {
      length: v.length,
      node: {
        value: BigInt(v),
      },
    };
  }
}

function parse(expr) {
  let length = 1;
  let leftOperand = parseOperand(expr.substr(length));
  length += leftOperand.length;
  let operator = readOperator(expr.substr(length));
  length++;
  let rightOperand = parseOperand(expr.substr(length));
  length += rightOperand.length;
  length++;
  return { length, node: { left: leftOperand.node, right: rightOperand.node, operator } };
}

function evaluateWith(node, fun) {
  if (node.value != undefined) {
    return node.value;
  }
  let ev = getEvalFun(node.operator, fun);
  return ev(evaluateWith(node.left, fun), evaluateWith(node.right, fun));
}

function getEvalFun(operator, fun) {
  switch (operator) {
    case '+':
      return (a, b) => a + b;
    case '*':
      return (a, b) => a * b;
    case '#':
      return fun;
  }
  throw Error('Unknown operator');
}

function areEquivalent(aNode, bNode) {
  let functionsToTest = [
    (a, b) => a - b,
    (a, b) => a | b,
    (a, b) => a & b,
    (a, b) => a ^ b,
    (a, b) => ~a & ~b,
    (a, b) => ~a | ~b,
    (a, b) => (BigInt(Number.MAX_SAFE_INTEGER) - a) * (BigInt(Number.MAX_SAFE_INTEGER) - b),
    (a, b) => (BigInt(Number.MAX_SAFE_INTEGER) + a) * (BigInt(Number.MAX_SAFE_INTEGER) - b),
    (a, b) => (BigInt(Number.MAX_SAFE_INTEGER) - a) ^ (BigInt(Number.MAX_SAFE_INTEGER) + b),
  ];
  for (let i = 0; i < functionsToTest.length; i++) {
    let fun = functionsToTest[i];
    if (evaluateWith(aNode, fun) !== evaluateWith(bNode, fun)) {
      return false;
    }
  }
  return true;
}

function solution() {
  const T = Number(readLine());
  for (let t = 0; t < T; t++) {
    const N = Number(readLine());
    let expressions = [];
    for (let i = 0; i < N; i++) {
      expressions.push(parseOperand(readLine()).node);
    }
    let classes = [1];
    let nextClass = 2;
    for (let i = 1; i < N; i++) {
      let found = false;
      for (let j = 0; j < i; j++) {
        if (areEquivalent(expressions[i], expressions[j])) {
          classes.push(classes[j]);
          found = true;
          break;
        }
      }
      if (!found) {
        classes.push(nextClass++);
      }
    }
    console.log(`Case #${t + 1}: ${classes.join(' ')}`);
  }
}
