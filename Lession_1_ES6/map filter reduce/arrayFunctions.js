const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubled);

const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
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
const personClone = Object.assign({}, person, { company: "Rysun Labs" });
console.log("Cloned Person with additional property:", personClone);

function displayInfo(...args) {
  args.forEach((arg, index) => {
    console.log(`Argument ${index + 1}:`, arg);
  });
}
displayInfo("Hello", 42, true, { name: "shubham" }, [1, 2, 3]);
