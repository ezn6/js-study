'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); //비동기 //setTimeout은 browser api
//setTimeout(fn함수,ms시간단위기입)
console.log('3'); //동기

// Synchronous callback
function printImmediately(print) {
  //print 라는 콜백함수를 받아서 함수printImmediately 의 인자로 집어넣는것이다.
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//출력순서
//1 : 동기
//3 : 동기
//hello : 동기
//2 : 1초뒤-> 비동기
//async callback : 2초뒤-> 비동기

// Callback Hell😈 example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    //콜백 : onSuccess, onError
    setTimeout(() => {
      if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        onSuccess(id); //onSuccess라는 콜백은 user === 'ellie'이면 그냥 id값만 가지고 있는것이다
      } else {
        onError(new Error('not found')); //Error 라는 obj만드는것(Error은 lib에 있는 obj이다...)
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' }); //onSuccess라는 콜백은 user === 'ellie'이면 { name: 'ellie', role: 'admin' }을 갖게된다
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    //user은 id값을 넘겨받은것~
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
        //console.log(userWithRole); //{name: 'ellie', role: 'admin'}
      },
      (error) => {
        console.log(error); //Error: no access     at callback.js:49
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
