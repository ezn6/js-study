//function is object in JS

//Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi! by unknown ->from부분이 비었을때의 디폴트 값을 함수에서 설정할수 있다.

//Rest parameters -> 배열로 받음
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    //위와 같은역할을 하는 for문
    for (const arg of args) {
        console.log(arg);
    }
    console.log(args) //["dream", "coding", "ellie"]
}
printAll('dream', 'coding', 'ellie');

//밖에서는 안을 볼수 없고, 안에서는 밖을 볼수 있다!
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable ->hello
    console.log(globalMessage);//global
    function printAnother() {
        console.log(message);//>>가능
        let childMessage = 'hello';
    }
    //console.log(childMessage);>>> 에러발생!
}
printMessage();

//Early return, early exit
// bad
function upgrade(user) {
    if (user.point > 10) {
        //long upgrade logic...😂
    }
}
//good
function upgrade(user) {
    if (user.point <= 10) {
        return;
    }//제한이 걸리는 경우를 빠르게 먼저 찾고 리턴해버리는게 좋다
    //long upgrade logic...!
}

//함수 이름이 없이 필요한부분만 작성하여 변수에 할당 : anonymous function
const Print = function () {
    console.log('Print!');
}
Print(); //함수를 호출할때는 변수명에 괄호붙이면됨

//Callback function using function expression
//전달된 함수를 부르는것이 콜백함수 예시에서는 printYes, printNO가 콜백함수.
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {//anonymous function
    console.log('yes!');
}
const printNo = function print() {
    //named function
    //better debugging in debugger's stack traces
    //recursions에 유용함
    console.log('no..');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
}
//위와같은 arrow function
const simplePrint = () => console.log('simplePrint');

const add = (a, b) => a + b; //화살표옆 a+b는 리턴값!

const simpleMult = (a, b) => {
    //함수내용이 길다면 이곳에 더 적고 리턴값도 적어주기
    return a * b
}