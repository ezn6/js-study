'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object.

//1. Literals and properties(key)
const obj1 = {}; //object literal syntax
const obj2 = new Object(); //object constructor syntax(class를 템플릿으로 이용해서 만들기)

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
print(ellie); //ellie   4
console.log('@@@')
console.log(ellie) //{name: "ellie", age: 4}

//with JavaScript magic (dynamically typed language)
//can ADD properties later...
ellie.hasJob = true;
console.log(ellie.hasJob);//true

//can DELETE properties later...
delete ellie.hasJob;
console.log(ellie.hasJob);//undefined


//2. Computed properties
// key should be always string type
console.log(ellie.name); //ellie
console.log(ellie['name']); //>> 얘가 Computed properties , ellie
//실시간으로 원하는 키의 벨류을 가져오고 싶을때 Computed properties쓴다. 밑엔 ex
function printValue(obj, key) {
    // console.log(obj.key); //>> undefined why? 이것은 obj에 key라는 property가 있는지 묻는 코드이다.
    console.log(obj[key]);
}
printValue(ellie, 'name'); //ellie


//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'tom', age: 4 };
const person4 = new Person('ace', 5);
console.log(person4); //Person {name: "ace", age: 5}

//4. Constructor Function
//마치 클래스 처럼 obj를 빠르게 만들수 있다.
//동일한 key, value를 반복해서 작성하는 ojb를 만들때 사용하기
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}


//5. in operator : property existence check (key in obj)
console.log('name' in ellie); //true
console.log('job' in ellie); //false


//6. for..in vs for..of
//for (key in obj)
console.clear();
for (let key in ellie) {
    console.log(key); //name  age
}


//7. Fun cloning
const user = { name: 'ellie', age: 20 };
const user2 = user;
user2.name = 'tom'
console.log(user); //{name: "tom", age: 20}

//old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); //{name: "tom", age: 20}

//new way
const user4 = {};
Object.assign(user4, user); //assign(복사받을, 복사해오려는)
console.log(user4); //{name: "tom", age: 20}
//위 방법과 같은 방법:>> const user4 = Object.assign({}, user);
console.clear();
user4.name = 'amy'
console.log(user, user4); //{name: "tom", age: 20} {name: "amy", age: 20}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue (겹치는 key값에 대해선 가장 마지막 value로)
console.log(mixed.size); //big