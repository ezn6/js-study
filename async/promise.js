'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer

//executor 함수 속에 resolve, reject 각각 콜백함수
// - resolve : 기능을 정상적으로 수행하여 마지막에 최종 데이터를 전달하는 콜백함수
// - reject : 기능을 수행하다가 문제가 생기면 호출하게될 콜백함수
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files 들은 비동기적으로 처리하는것이 좋다)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
});
//🚩🚨 when new Promise is created, the executor runs automatically.바로 콜백함수가 실행된다!
//
//
//

// 2. Consumers: then, catch, finally
// then은 promise가 정상적으로 잘 수행되어서 마지막으로 resolve 콜백함수 통해서 전달한 값이 value 파라미터로 전달되어졌을때 then으로 받음
promise //
  .then((value) => {
    //then 이라는 것은 Promise를 리턴하기 때문에 리턴된 Promise에 catch를 다시 호출할수 있는것이다(array-api.js에서도 여러가지 api들을 호출했던 경험!)
    console.log(value);
  })
  .catch((error) => {
    console.log(error); //에러사항이 콘솔로그에 찍힌다
  })
  .finally(() => {
    console.log('finally'); //finally 부분은 무조건 실행된다
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); //11
//여러가지 then 들로 비동기적인 것들을 묶어서 위와같이 처리할수도 있다
//또한 return 에서 new Promise함수를 생성할수도 있다!
//

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal)) // getEgg resolve 인경우: 🐓 => 🥚 => 🍳
  .catch(console.log); //Error: error! 🐓 => 🥚

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return '🥗'; //Error Handling!!!
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal)) // getEgg resolve 인경우: 🐓 => 🥚 => 🍳
  .catch(console.log); //🥗 => 🍳 >>:: Error이 뜨지 않고 에러핸들링을 해주었기 때문에 정상적으로 콘솔출력이 된다!

// .then(getEgg) 콜백함수에서 받아오는 value를 바로 다른함수로 전달하는 간단한 함수일때는 아래와같이 생략하여 적어도 가능
// getHen() //
// .then(getEgg)
// .then(cook)
// .then(console.log)
// .catch(console.log);
