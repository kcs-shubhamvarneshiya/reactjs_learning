const numbers = [1, 2, 3, 4, 5];

const doubled = [...numbers.map((num) => num * 2)];
console.log("Doubled Numbers:", doubled);

const moreNumbers = [6, 7, 8];
const combined = [...numbers, ...moreNumbers];
console.log("Combined Numbers:", combined);

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
const total = sum(1, 2, 3, 4, 5);
console.log("Sum of numbers:", total);

const person = {
  name: "Shubham Varneshiya",
  age: 25,
  profession: "Backend Developer",
};

const personClone = { ...person, company: "Rysun Labs" };
console.log("Cloned Person with additional property:", personClone);

function displayInfo(...args) {
  args.forEach((arg, index) => {
    console.log(`Argument ${index + 1}:`, arg);
  });
}

displayInfo("Hello", 42, true, { name: "shubham" }, [1, 2, 3]);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

const arr3 = [10,[20,30,40],50];
const mergedArrayMulti = [...arr3,...arr1];
console.log("Merged Array with Nested:", mergedArrayMulti); 

const obj1 = { name: "SHubham", age: 25 };
const obj2 = { role: "Developer", experience: 3.5 };
const mergedObject = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObject);

console.log("Difference between Spread and Rest Operator:");

const a = [1, 2, 3];
const b = [4, 5, 6];
const combinedArray = [...a, ...b]; // Spread operator
console.log("Combined Array using Spread:", combinedArray);

function multiply(factor, ...numbers) { // Rest operator
  return numbers.map((num) => num * factor);
}
const multipliedNumbers = multiply(2, 1, 2, 3, 4, 5);
console.log("Multiplied Numbers using Rest:", multipliedNumbers);

const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
const clone2 = originalArray
console.log("Cloned Array using Spread:", clonedArray);
console.log("Cloned Array using direct assignment:", clone2);

function nameAndAge(name,...args) {
  console.log("Name:", name);
  console.log("Arguments received:", args);
}

nameAndAge("Shubham",25,"Developer","Rysun Labs");

