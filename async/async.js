// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    //do network request in 10 secs...
    resolve('ellie');
  });
}

const user = fetchUser();
user.then(console.log); //ellie
console.log(user); //Promise {<fulfilled>: 'ellie'}

//위와 같은 식이 바로 🔽

async function fetchUser() {
  //do network request in 10 secs...
  return 'ellie';
}

const user2 = fetchUser();
user.then(console.log); //ellie
console.log(user); //Promise {<fulfilled>: 'ellie'}

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); //delay라는 함수 먼저 실행한 뒤에(=3초 기다린 후에) 리턴을 실행함
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
//위와 동일한 코드는 아래와 같다.
//아래를 간결하게 async-await을 이용하여 위와같이 쓰면 된다.
// function getBanana() {
//   return delay(3000) //
//     .then(() => '🍌');
// }
//

//

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log); //2초 뒤에 🍎 + 🍌출력

//async-await으로 위 함수를 간결하게!↓

async function pickFruits() {
  const appletest = getApple(); //이런식으로 Promise선언된 함수를 바로 부르면 promise 코드블럭 안에 있는것이 바로! 실행된다
  //const apple = await getApple(); //사과 바나나를 이런식으로 불렀다면 각각의 시간이 지난 후 출력된다
  const bananaPromise = getBanana();
  const apple = await appletest;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log); //delay 시간 둘다 1초라면 1초 뒤에 🍎 + 🍌출력
//Promise선언된 함수를 바로 불러서 병렬적으로 사과와 바나나를 동시 다발적으로 수행 가능하다

//

//3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]); //all : promise배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을때까지 배열로!모아준다
  // .then((fruits) => fruits.join(' & '));
}
pickAllFruits().then(console.log); //['🍎', '🍌']

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); //배열에 전달된 p중에서 가장먼저! 값을 리턴하는것만 전달되어진다(이 예시는 시간 다르게 하여서 실행하기)
}
pickOnlyOne().then(console.log); //🍌

//
//

//homework🍜
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }

  //🍦🍦🍧🍧🍨🍨

  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

//

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log); //{name: 'ellie', role: 'admin'}
