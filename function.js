// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// 😀function is object in JS
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
function showMessage(message, from = 'unknown') {//Hi! by unknown ->from부분이 비었을때의 디폴트 값을 파라미터값 옆에서 설정할수 있다.
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { //...args : 배열로 받음
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
//밖에서는 안이보이지 않고, 안에서는 밖이 보인다!
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // hello :(local variable)
    console.log(globalMessage); //global
    console.log('🎐')
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error👹
    printAnother(); //hello
}
printMessage();

// 6. Return a value
console.log('🎏 ' + sum(9, 9));// function declaration -> hoisted
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

// good🎁
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
// 🎈a function declaration can be called earlier than it is defined. (hoisted) EX. 위에서 선언했던 sum 함수
// 🎈a function expression is created when the execution(실행) reaches it.

//print(); -> error!!
const print = function () {//함수를 선언함과 동시에 print라는 변수에 할당
    // anonymous function(함수에 이름이 없는  함수)
    // named function 이려면 const print = function print () {...} 이런식
    console.log('print');
};
print();//print
const printAgain = print;
printAgain();//print
const sumAgain = sum;
console.log(sumAgain(1, 3)); //4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    //함수를 전달해서 원하는 상황에서 함수를 부르는것이 콜백함수!
    //여기선 printYes, printNo 2개가 콜백함수이다
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

// Arrow function : "function" 글자와 {}괄호를 지우고 대신 arrow를 쓰기!
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
// 선언함과 동시에 함수 사용
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
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