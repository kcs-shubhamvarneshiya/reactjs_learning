const fetchData = () => {
  return new Promise((resolve) => {
    console.log("Fetching data...");
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();

//example 2
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function delayedLog() {
  console.log("Waiting for 3 seconds...");
  await delay(3000);
  console.log("3 seconds have passed!");
}
delayedLog();

//example 3
async function fetchMultipleData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );
    const results = await Promise.all(fetchPromises);
    console.log("Fetched multiple data:", results);
  } catch (error) {
    console.error("Error fetching multiple data:", error);
  }
}

fetchMultipleData();

//example 4
async function sequentialTasks() {
  console.log("Starting task 1...");
  await delay(1000);
  console.log("Task 1 completed.");
  console.log("Starting task 2...");
  await delay(2000);
  console.log("Task 2 completed.");
  console.log("Starting task 3...");
  await delay(1500);
  console.log("Task 3 completed.");
}
sequentialTasks();

//example 5
async function errorHandlingExample() {
  try {
    console.log("Starting risky operation...");
    await Promise.reject("Something went wrong!");
  } catch (error) {
    console.error("Caught an error:", error);
  } finally {
    console.log("Cleanup operations can be done here.");
  }
}

errorHandlingExample();

//example 6
async function nestedAsyncFunctions() {
  async function innerFunction() {
    await delay(1000);
    return "Inner function result";
  }
  console.log("Calling inner async function...");
  const result = await innerFunction();
  console.log("Result from inner function:", result);
}
nestedAsyncFunctions();
