const name = "shubham";
// const name = "Varneshiya"; // Uncaught SyntaxError: Identifier 'name' has already been declared
console.log("It cannot be re-declared");
console.log("Name is : ", name); // Output: shubham
console.log("--------------------------------------------------");

// const cannot be re-assigned
// name = "Varneshiya"; // Uncaught TypeError: Assignment to constant variable.
// console.log("It cannot be re-assigned");
// console.log("Name is : ", name); // Output: Varneshiya
console.log("It cannot be re-assigned");
console.log("--------------------------------------------------");

// const has block scope
function constFunctionScope() {
  const functionConst = "I am inside a function";
  console.log(functionConst); // Output: I am inside a function
}
constFunctionScope();
// console.log(functionConst); // Uncaught ReferenceError: functionConst is not defined
console.log("--------------------------------------------------");

// const has block scope
if (true) {
  const blockConst = "I am inside a block";
  console.log(blockConst); // Output: I am inside a block
}
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined
console.log("It has block scope");
console.log("--------------------------------------------------");

// Hoisting with const
console.log("Hoisting with const:");
// console.log(hoistedConst); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am hoisted";
console.log(hoistedConst); // Output: I am hoisted
console.log("--------------------------------------------------");
