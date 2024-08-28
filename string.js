const name = "Hamza";
const score = 30;
console.log(`The score of ${name} is ${30}`);

const gameName = new String("Clash-of-clan");

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("c"));
// console.log(gameName.indexOf("C"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const stringOne = "   Hamza     ";
console.log(stringOne.trim());
console.log(gameName.split("-"));
