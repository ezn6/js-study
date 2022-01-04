'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);//2
console.log(fruits[0]);//사과
console.log(fruits[1]);//바나나
console.log(fruits[2]);//undefined
console.log(fruits[fruits.length - 1]);//마지막인덱스인 바나나


// 3. Looping over an array
//print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}


// c. forEach : 배열안에 들어있는 value들마다 내가 전달한 함수를 출력한다
fruits.forEach((fruit) => console.log(fruit));//ctrl누르고 api 확인해보기! 🍎  🍌
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//forEach(전달한콜백함수 value하나하나마다 호출해준다, 파라미터전달해도 되고 안해도된다(물음표가 있으면 이런뜻이다))
//마지막의 : void 이런식으로 :뒤에 써있는 것은 리턴값 이라는 뜻이다
//콜백함수에는 총 3가지의 인자가 들어올수 있다는 뜻이다

//forEach 다른 예시
fruits.forEach((fruit, index) => console.log(fruit, index));//🍎 0   🍌 1

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// 🚩🚩🚩 note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
//fruits.splice(1); // 인덱스1 부터 끝까지 모두 지워짐
fruits.splice(1, 1); //인덱스1부터 1개만 지울것이다
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //ctrl누르고 concat 확인
console.log(newFruits);

console.clear();
// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍎'));//0
console.log(fruits.indexOf('🍉'));//2
console.log(fruits.indexOf('🥥')); //없을땐 -1

// includes : 배열에 존재하는지 t/f로 리턴
console.log(fruits.includes('🍉'));//true
console.log(fruits.includes('🥥'));//false

// lastIndexOf
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));//0 : 배열의 중복값이 들어있으면 첫번째 인덱스 값 리턴
console.log(fruits.lastIndexOf('🍎'));//6  : 배열의 중복값이 들어있으면 마지막 인덱스 값 리턴
