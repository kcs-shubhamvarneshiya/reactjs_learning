//unions & Intersection types
//intersection types
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "Shubham",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(e1);

//union types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add(1, 2));
console.log(add("Hello, ", "world!"));
console.log(add("The answer is ", 42));
console.log(add(10, " apples"));

//type guards
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "Manish", startDate: new Date() });

//classes
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount);
  }
}

class Tracktor {
  drive() {
    console.log("Driving a tracktor...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo in tracktor: " + amount);
  }
  offRoading() {
    console.log("Offroading with the tracktor...");
  }
}

type Vehicle = Car | Truck | Tracktor;
const v1 = new Car();
const v2 = new Truck();
const v3 = new Tracktor();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Tracktor) {
    vehicle.loadCargo(500);
    vehicle.offRoading();
  }
}
useVehicle(v1);
useVehicle(v2);
useVehicle(v3);

//discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 20 });

//type casting
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hello TypeScript";
const anotherInputElement = document.getElementById("another-input");
if (anotherInputElement) {
  (anotherInputElement as HTMLInputElement).value = "Hello again!";
}

//index properties
interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital letter!",
};
console.log(errorBag);

//intersection types
type Admin1 = {
  name: string;
  privileges: string[];
};
type Employee1 = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee1 = Admin1 & Employee1;
const e11: ElevatedEmployee1 = {
  name: "Shubham",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(e11);

