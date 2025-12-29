let name = "shubham";
// let name = "Varneshiya"; // Uncaught SyntaxError: Identifier 'name' has already been declared
console.log("It cannot be re-declared");
console.log("Name is : ", name); // Output: shubham

console.log("--------------------------------------------------");
name = "Varneshiya"; // Re-assigning the value
console.log("It can be re-assigned");
console.log("Name is : ", name); // Output: Varneshiya

console.log("--------------------------------------------------");

// let has block scope
function letFunctionScope() {
  let functionLet = "I am inside a function";
  console.log(functionLet); // Output: I am inside a function
}

letFunctionScope();
// console.log(functionLet); // Uncaught ReferenceError: functionLet is not defined

console.log("--------------------------------------------------");
// let has block scope
if (true) {
  let blockLet = "I am inside a block";
  console.log(blockLet); // Output: I am inside a block
}
// console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined
console.log("It has block scope");

console.log("--------------------------------------------------");
