'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object.

//1. Literals and properties(key)
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax(class를 템플릿으로 이용해서 만들기)

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


//2. Computed properties(다른속성(성질)을 기반으로 해당 속성값이 결정된다)
// key should be always string type!!
console.log(ellie.name); //ellie
console.log(ellie['name']); //이런식으로도 접근가능, 얘가 Computed properties , ellie

ellie['hasJob'] = true;
console.log(ellie.hasJob); //true

//어떤키가 필요한지 모를때, 런타임(코드실행되는중)에서 키가 결정될때
//실시간으로 원하는 키의 벨류을 가져오고 싶을때 Computed properties쓴다. 밑엔 ex
function printValue(obj, key) {
    console.log('🧶');
    //console.log(key);
    //console.log(obj);
    //console.log(obj.key); //undefined : why? 이것은 obj에 key라는 property가 있는지 묻는 코드이다.
    //또한 런타임중에 키가 결정되는 코드이기 때문에 computed properties이다.
    console.log(obj[key]);
}
printValue(ellie, 'name'); //ellie


//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'tom', age: 4 };
const person4 = new Person('ace', 5);
console.log(person4); //Person {name: "ace", age: 5}
const person5 = makePerson('olivia', 25);
console.log(person5); //{name: 'olivia', age: 25}

// key와 value 이름이 동일하다면 생략해 줄수 있다
function makePerson(name, age) {
    return {
        // name: name,
        // age: age
        name,
        age
    }
}

//4. Constructor Function
//마치 클래스 처럼 obj를 빠르게 만들수 있다.
//동일한 key, value를 반복해서 작성하는 obj를 만들때 사용하기
function Person(name, age) {
    //생략된것:this = {};
    this.name = name;
    this.age = age;
    //생략된것:return this;
}


//5. in operator : property existence check (key in obj)
console.log('name' in ellie); //true
console.log('job' in ellie); //false


//6. for..in vs for..of
//for (key in obj)
//console.clear();
for (let key in ellie) { //모든 키들을 받아올때
    console.log(key); //name  age   hasJob
}

// for (value of iterable)
const array = [1, 3, 5];
for (let value of array) { //모든 배열들을 받아올때
    console.log(value);// 1  3  5
}


console.clear();
//7. Fun cloning
const user = { name: 'ellie', age: 20 };
const user2 = user; //user2와 user은 같은 reference가리키고 같은 object값 가리킨다.
user2.name = 'tom'
console.log(user); //{name: "tom", age: 20}

//old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key]; //user3이라는 빈 obj에 key값에 대응하는 user[key]의 value값들을 할당
}
//console.clear();
console.log(user['name']);//tom
console.log(user3); //{name: "tom", age: 20}

//new way👼
const user4 = {};
Object.assign(user4, user); //assign(target, source) / ctrl키 누르고 assign함수 누르면 정의된 곳으로 이동할수 있다
console.log(user4); //{name: "tom", age: 20}
//위 방법과 같은 방법:>> const user4 = Object.assign({}, user);
//console.clear();
user4.name = 'amy'
console.log(user, user4); //{name: "tom", age: 20} {name: "amy", age: 20}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue (겹치는 key값에 대해선 가장 마지막 value로)
console.log(mixed.size); //big
