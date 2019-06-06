/**
 * *************
 * Comience aqui
 * *************
 * diferentes formas de hcer llamados
 */
const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

console.log(math.add(2,4));
console.log(math.divide(2,4));
console.log(math.substract(2,4));
console.log(math.add(2,4));

//otra forma de llamar archivo
console.log(greet.greet("eeeee"));

console.log(hello.sayHello("carrr"));