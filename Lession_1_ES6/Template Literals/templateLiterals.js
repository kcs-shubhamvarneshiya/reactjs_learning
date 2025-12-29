const profile = {
  name: "Shubham Varneshiya",
  age: 25,
  profession: "Backend Developer",
  company: "Rysun Labs",
};
const introduction = `Hello, my name is ${profile.name}. I am ${profile.age} years old and work as a ${profile.profession} at ${profile.company}.`;
console.log(introduction);

const multiLineString = `This is a string
that spans multiple
lines using template literals.`;
console.log(multiLineString);

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

const items = ["apple", "banana", "cherry"];
const itemList = `Fruits available:
- ${items[0]}
- ${items[1]}
- ${items[2]}`;
console.log(itemList);
