function normalFunction(name) {
  console.log("Normal function called with name:", name);
}

const arrowFunction = (name) => {
  console.log("Arrow function called with name:", name);
};

normalFunction("Shubham");
arrowFunction("varneshiya");

// Demonstrating 'this' behavior in normal function vs arrow function
const obj = {
  name: "semicolon",
  age: 25,
  normalMethod: function () {
    console.log("Normal method called with name:", this.name);
    const arrowFunction = () => console.log("Arrow function inside normal method called with age:", this.age);
    arrowFunction();
  },
};

obj.normalMethod();

// Using arrow function for concise syntax
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log("Squares of numbers:", squares);

// Using arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet();

// Using arrow function with single parameter without parentheses
const double = (n) => n * 2;
console.log("Double of 4 is:", double(4));

// Using arrow function with multiple parameters
const add = (a, b) => a + b;
console.log("Sum of 3 and 5 is:", add(3, 5));

// Using arrow function with block body
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log("Factorial of 5 is:", factorial(5));

// Using arrow function as a callback
setTimeout(() => {
  console.log("I'll shown after 2 seconds");
}, 2000);

// Using arrow function to return an object
const createPerson = (name, age) => ({ name: name, age: age });
const person = createPerson("Alice", 30);
console.log("Created person (in object return):", person);

// Using arrow function with default parameters
const greetPerson = (name = "Guest") => {
  console.log("Hello with default parameter,", name);
};
greetPerson();
