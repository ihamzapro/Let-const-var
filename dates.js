let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 2, 5);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("01-14-2023");
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(myTimeStamp / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

`${newDate.getDay} and the time is ${newDate.getTime}`;
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);
