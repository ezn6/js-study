'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(), //Date라는 object 자체이다.
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // jump라는 함수형태는 json에 나타나지 않는다.
//{"name":"tori","color":"white","size":null,"birthDate":"2022-01-04T09:18:33.208Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
//원하는 property만 정보를 가져올수 있다.
console.log(json); //{"name":"tori","color":"white","size":null}


//세밀하게 JSON을 통제하고 싶을때 콜백함수를 인자로 사용한다.
json = JSON.stringify(rabbit, (key, value) => { //🚗 꼭 key, value라고 써야한다
    console.log(`key: ${key}, value: ${value}`);
    // return key;
    return key === 'name' ? 'ellie' : value; //key값이 name이면 ellie를 출력하고, 아닌 key값은 value를 출력하라
});
//출력내용 ↓
// key: , value: [object Object] -->rabbit object를 싸고있는 가장 최상위것이 전달된다
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2022-01-04T10:32:27.875Z
// key: jump, value: function () {
//         console.log(`${this.name} can jump!`);
//     }
console.log(json);
//{"name":"ellie","color":"white","size":null,"birthDate":"2022-01-04T10:33:34.827Z"}


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2022-01-04T12:51:02.966Z"}

const obj2 = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2); //{name: 'tori', color: 'white', size: null, birthDate: '2022-01-04T12:54:12.467Z'}
//-> obj2에서는 birthDate가 string 형태로 받아진다.

console.log(obj); //{name: 'tori', color: 'white', size: null, birthDate: Tue Jan 04 2022 21:51:02 GMT+0900 (한국 표준시)}
//-> obj에서는 birthDate를 Date obj형태로 받아오기 위해 콜백함수를 사용했다!😘 (string값을 변환시키는게 아니라 현재의 새로운 Date obj로 만드는것이다.)


rabbit.jump(); //tori can jump!
// obj.jump(); 에러!! ->> 다시 json으로부터 obj를 만든것은 함수가 없다.(애초에 obj를 json화 할때 함수는 stringify에 포함되지 않았다.)

console.log(rabbit.birthDate.getDate()); //4 ('일'이 적힌다)
console.log(obj.birthDate.getDate()); //4
//console.log(obj2.birthDate.getDate()); //에러!!
console.log(obj2.birthDate); //2022-01-04T12:50:52.117Z -->> string 형태!!