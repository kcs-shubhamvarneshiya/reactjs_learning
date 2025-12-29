interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "SHubham",
  age: 26,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

user.greet();
// Extending interfaces
interface Employee extends Person {
  company: string;
  position: string;
}
const employee: Employee = {
  name: "Shubham Varneshiya",
  age: 30,
  company: "Rysun",
  position: "Developer",
  greet() {
    console.log(
      `Hello, my name is ${this.name}, I work at ${this.company} as a ${this.position}.`
    );
  },
};
employee.greet();

/// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  getDiscountedPrice(discount: number): number;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
  getDiscountedPrice(discount: number): number {
    return this.price - this.price * (discount / 100);
  },
};

console.log(`Discounted Price: Rs.${product.getDiscountedPrice(15)}`);

// Optional properties in interfaces
interface Car {
  make: string;
  model: string;
  year?: number; // Optional property
}
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
};
console.log(`Car: ${myCar.make} ${myCar.model}`);

// Readonly properties in interfaces
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 10, y: 20 };
console.log(`Point coordinates: (${point.x}, ${point.y})`);
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property

// Function types in interfaces
interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = (a: number, b: number): number => a + b;
const multiply: MathOperation = (a: number, b: number): number => a * b;
console.log(`Add: ${add(5, 10)}`);
console.log(`Multiply: ${multiply(5, 10)}`);

// Indexable types in interfaces
interface StringArray {
  [index: number]: string;
}
const fruits: StringArray = ["Apple", "Banana", "Cherry"];
console.log(`First fruit: ${fruits[0]}`);

// Hybrid types in interfaces
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    return `Counter started at ${start}`;
  };
  counter.interval = 1000;
  counter.reset = function () {
    console.log("Counter reset");
  };
  return counter;
}

const myCounter = getCounter();
console.log(myCounter(10));
console.log(`Interval: ${myCounter.interval}`);
myCounter.reset();

// Interface for a function that fetches data
interface FetchData {
  (url: string): Promise<string>;
}
const fetchData: FetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error("Error fetching data:", error));
    

