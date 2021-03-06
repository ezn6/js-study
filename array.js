'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);//2
console.log(fruits[0]);//μ¬κ³Ό
console.log(fruits[1]);//λ°λλ
console.log(fruits[2]);//undefined
console.log(fruits[fruits.length - 1]);//λ§μ§λ§μΈλ±μ€μΈ λ°λλ


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


// c. forEach : λ°°μ΄μμ λ€μ΄μλ valueλ€λ§λ€ λ΄κ° μ λ¬ν ν¨μλ₯Ό μΆλ ₯νλ€
fruits.forEach((fruit) => console.log(fruit));//ctrlλλ₯΄κ³  api νμΈν΄λ³΄κΈ°! π  π
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//forEach(μ λ¬νμ½λ°±ν¨μ valueνλνλλ§λ€ νΈμΆν΄μ€λ€, νλΌλ―Έν°μ λ¬ν΄λ λκ³  μν΄λλλ€(λ¬Όμνκ° μμΌλ©΄ μ΄λ°λ»μ΄λ€))
//λ§μ§λ§μ : void μ΄λ°μμΌλ‘ :λ€μ μ¨μλ κ²μ λ¦¬ν΄κ° μ΄λΌλ λ»μ΄λ€
//μ½λ°±ν¨μμλ μ΄ 3κ°μ§μ μΈμκ° λ€μ΄μ¬μ μλ€λ λ»μ΄λ€

//forEach λ€λ₯Έ μμ
fruits.forEach((fruit, index) => console.log(fruit, index));//π 0   π 1

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// π©π©π© note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
//fruits.splice(1); // μΈλ±μ€1 λΆν° λκΉμ§ λͺ¨λ μ§μμ§
fruits.splice(1, 1); //μΈλ±μ€1λΆν° 1κ°λ§ μ§μΈκ²μ΄λ€
console.log(fruits);
fruits.splice(1, 0, 'π', 'π');
console.log(fruits);

// combine two arrays
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2); //ctrlλλ₯΄κ³  concat νμΈ
console.log(newFruits);

console.clear();
// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('π'));//0
console.log(fruits.indexOf('π'));//2
console.log(fruits.indexOf('π₯₯')); //μμλ -1

// includes : λ°°μ΄μ μ‘΄μ¬νλμ§ t/fλ‘ λ¦¬ν΄
console.log(fruits.includes('π'));//true
console.log(fruits.includes('π₯₯'));//false

// lastIndexOf
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));//0 : λ°°μ΄μ μ€λ³΅κ°μ΄ λ€μ΄μμΌλ©΄ μ²«λ²μ§Έ μΈλ±μ€ κ° λ¦¬ν΄
console.log(fruits.lastIndexOf('π'));//6  : λ°°μ΄μ μ€λ³΅κ°μ΄ λ€μ΄μμΌλ©΄ λ§μ§λ§ μΈλ±μ€ κ° λ¦¬ν΄
