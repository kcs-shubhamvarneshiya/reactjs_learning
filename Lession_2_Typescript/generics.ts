//Generics
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(`Output1: ${output1}, Output2: ${output2}`);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function loggingInNumberIdentity<T>(args: number): number {
  console.log(args);
  return args;
}
let arrayOutput = loggingIdentity<number>([1, 2, 3, 4]);
let numberArrayOutput = loggingInNumberIdentity<number>(10);
console.log(`Array Output: ${arrayOutput}`);
console.log(`Number Array Output: ${numberArrayOutput}`);

