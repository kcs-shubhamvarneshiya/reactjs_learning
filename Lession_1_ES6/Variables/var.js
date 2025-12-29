var name = "shubham";
var name = "Varneshiya";

console.log("It can be re-declared");
console.log("Name is : ", name); // Output: Varneshiya

var age = 25;
age = 26; // Re-assigning the value
console.log("It can be re-assigned");
console.log("Age is : ", age); // Output: 26

// var has function scope
function varFunctionScope() {
  var functionVar = "I am inside a function";
  console.log(functionVar); // Output: I am inside a function
}
varFunctionScope();

// var does not have block scope
if (true) {
  var blockVar = "I am inside a block";
}
console.log("It does not have block scope");
console.log(blockVar); // Output: I am inside a block

// Hoisting with var
console.log("Hoisting with var:");
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// Summary
console.log("Summary:");
console.log("- 'var' can be re-declared and re-assigned.");
console.log("- 'var' has function scope, not block scope.");
console.log(
  "- Variables declared with 'var' are hoisted and initialized with 'undefined'."
);
