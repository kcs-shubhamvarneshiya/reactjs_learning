const company: string = "Rysun";
const age: number = 30;
const isStudent: boolean = false;
const hobbies: string[] = ["Reading", "Traveling", "Gaming"];

const person: { company: string; age: number } = {
  company: "Rysun",
  age: 30,
};

// Enum for favorite colors
enum Color {
  Red,
  Green,
  Blue,
}
const favoriteColor: Color = Color.Green;

function greet(personCompany: string): string {
  const message = {
    company: personCompany,
    age: age,
    isStudent: isStudent,
    hobbies: hobbies,
    favoriteColor: Color[favoriteColor],
  };
  return `Hello, ${personCompany}! Here is your profile: ${JSON.stringify(
    message
  )}`;
}
console.log(greet(company));

// Function with void return type
function logMessage(message: string): void {
  console.log("Log:", message);
}
logMessage("This is a TypeScript basics example.");

// Function with never return type
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
// Uncommenting the line below will throw an error
// throwError("This is a critical error!");

// Union type example
function formatId(id: number | string): string {
  return `ID: ${id.toString()}`;
}
console.log(formatId(123));
console.log(formatId("ABC123"));

// Type assertion example
const someValue: unknown = "This is a string";
const strLength: number = (someValue as string).length;
console.log(`String length: ${strLength}`); 



