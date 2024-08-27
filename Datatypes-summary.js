// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 30;
const myScore = 30.8;

const isLoggedIn = true;
const outsideTem = null;

let myAge;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

// if symbol have same values but they return different values

// Refrence (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["Superman", "Ironman", "Loki", "Captain America"];

const aboutHamza = {
  name: "Hamza",
  age: 18,
  hobby: "coding",
};

const myFunction = function () {
  console.log("Hello World");
};

// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

// -----------------------------For more details visit this link--------------------------
// https://262.ecma-international.org/5.1/#sec-11.4.3
