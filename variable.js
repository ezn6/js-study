'use strict';

// let Name = 'ellie';
// console.log(Name);
// Name = 'hello';
// console.log(Name);

// const num1 = 17;
// const num2 = 'test'
// console.log(`value: ${num1}, type: ${typeof num1}`);
// console.log(`value: ${num2}, type: ${typeof num2}`);

// let list = [
//     { date: '2021-06-30 10' },
//     { date: '2021-07-01 10' },
//     { date: '2021-07-02 10' },
//     { date: '2021-07-03 10' },
//     { date: '2021-07-04 10' },
// ]

// const date = '2021-07-01 10:43:33'
// const date2 = '2021-07-11'

//console.log(parseInt(date2.split('-')[2]) + 1)
// let num = parseInt(date2.split('-')[2]) + 1;
//console.log(num);
//num.toString()
//console.log(num);



// var now = new Date(2021, 4, 13);	// 현재 날짜 및 시간
// console.log("현재 : ", now);
// var tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
// console.log("내일 : ", tomorrow);
// const dd = tomorrow.getDate()
// const mm = tomorrow.getMonth()
// const yy = tomorrow.getFullYear()
// console.log(`${yy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`)
// const hello = `${yy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`
// console.log(hello, 'hie')
// console.log(typeof (hello))

let today = new Date();	//현재날짜
let dd = today.getDate()
let mm = today.getMonth() + 1
let yy = today.getFullYear()
let date1 = `${yy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`
console.log(date1)
let back = new Date(today.setDate(today.getDate() - 30));//30일이내
let ddd = back.getDate()
let mmm = back.getMonth() + 1
let yyy = back.getFullYear()
let date2 = `${yyy}-${mmm >= 10 ? mmm : '0' + mmm}-${ddd >= 10 ? ddd : '0' + ddd}`
console.log(date2)
