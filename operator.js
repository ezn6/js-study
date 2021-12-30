//1. String concatenation
console.log(`string literals: 1+2=${1 + 2}`);// string literals: 1+2=3
console.log('my' + 'cat'); //mycat

//2. Numeric operators
console.log(1 + 1);//add : 2
console.log(2 ** 3); //exponentiation : 8

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //3 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //3 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //3 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); //3 2

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y : 9
console.log(x *= y); //54

//5. Comparison operators
console.log(10 < 6);
//그 외에 <= > >= 가 있다.

//6. Logical operators: ||(or) &&(and) !(not)
const value1 = true;
const value2 = 4 < 2; //false

//😎 || (or), finds the first truthy value 
// -> 첫번째가 true이면 다음값들의 t/f여부 보지않고 바로 true 리턴
// ->💛So computation이 무거운 함수같은 값들을 OR|| 비교할때 뒤쪽으로 위치하게 해야한다!!😎
console.log(`or: ${value1 || value2 || check()}`); //or: true
//console.log(`or: ${check() || value2 || value1}`); -> 되도록금지!

//😎 && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); //and: false

// &&(and) is often used to compress long if-statement
// Ex. null 체크할때 : nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// ! (not)
console.log(!value1); //false


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);//true
console.log(stringFive != numberFive);//false

// === strict equality, no type conversion
console.log(stringFive === numberFive);//fasle
console.log(stringFive !== numberFive);//true
console.log('🔶');
// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false -> 서로 다른 레퍼런스(참조)이니까 실제로 메모리에는 1과 2가 각각다른 레퍼런스가 들어있다
console.log(ellie1 === ellie2); //false -> 타입이 같던 다르던 이미 서로 다른 레퍼런스라서 false이다.
console.log(ellie1.name == ellie2.name); //true
console.log(ellie1.name === ellie2.name); //true
console.log(ellie1 === ellie3); //true -> ellie3에는 그냥 1을 할당한 것이므로 true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false -> 0은 boolean type이 아니기 때문에(===은 type equality check)
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}




//?????????????

//참조에 의한 전달(passed by reference)의 데이터타입: (Array, Function, Object) 의 예시
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    return person;
}

var personObj1 = {
    name: 'Alex',
    age: 30
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> {name: 'Alex', age: 25}
console.log(personObj2); // -> {name: 'John', age: 50}