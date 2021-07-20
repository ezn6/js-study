//String concatenation
console.log(`string literals: 1+2=${1 + 2}`)

// == loose equality, with type conversion
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive);//true
console.log(stringFive != numberFive);//false

// === strict equality, no type conversion
console.log(stringFive === numberFive);//fasle
console.log(stringFive !== numberFive);//true

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

//object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2)//false -> 서로 다른 레퍼런스(참조)이니까 실제로 메모리에는 1과 2가 각각다른 레퍼런스가 들어있다
console.log(ellie1 === ellie2)//false-> 타입이 같던 다르던 이미 서로 다른 레퍼런스라서 false이다.
console.log(ellie1 === ellie3)//3에는 그냥 1을 할당한 것이므로 true