// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// ๐function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  //Hi! by unknown ->from๋ถ๋ถ์ด ๋น์์๋์ ๋ํดํธ ๊ฐ์ ํ๋ผ๋ฏธํฐ๊ฐ ์์์ ์ค์ ํ ์ ์๋ค.
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  //...args : ๋ฐฐ์ด๋ก ๋ฐ์
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
//๋ฐ์์๋ ์์ด๋ณด์ด์ง ์๊ณ , ์์์๋ ๋ฐ์ด ๋ณด์ธ๋ค!
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // hello :(local variable)
  console.log(globalMessage); //global
  console.log('๐');
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error๐น
  printAnother(); //hello
}
printMessage();

// 6. Return a value
console.log('๐ ' + sum(9, 9)); // function declaration -> hoisted
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good๐
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// ๐a function declaration can be called earlier than it is defined. (hoisted) EX. ์์์ ์ ์ธํ๋ sum ํจ์
// ๐a function expression is created when the execution(์คํ) reaches it.

//print(); -> error!!
const print = function () {
  //ํจ์๋ฅผ ์ ์ธํจ๊ณผ ๋์์ print๋ผ๋ ๋ณ์์ ํ ๋น
  // anonymous function(ํจ์์ ์ด๋ฆ์ด ์๋  ํจ์)
  // named function ์ด๋ ค๋ฉด const print = function print () {...} ์ด๋ฐ์
  console.log('print');
};
print(); //print
const printAgain = print;
printAgain(); //print
const sumAgain = sum;
console.log(sumAgain(1, 3)); //4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  //ํจ์๋ฅผ ์ ๋ฌํด์ ์ํ๋ ์ํฉ์์ ํจ์๋ฅผ ๋ถ๋ฅด๋๊ฒ์ด ์ฝ๋ฐฑํจ์!
  //์ฌ๊ธฐ์  printYes, printNo 2๊ฐ๊ฐ ์ฝ๋ฐฑํจ์์ด๋ค
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function : "function" ๊ธ์์ {}๊ดํธ๋ฅผ ์ง์ฐ๊ณ  ๋์  arrow๋ฅผ ์ฐ๊ธฐ!
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// ์ ์ธํจ๊ณผ ๋์์ ํจ์ ์ฌ์ฉ
(function hello() {
  console.log('IIFE');
})();

// Fun quiz timeโค๏ธ
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));
