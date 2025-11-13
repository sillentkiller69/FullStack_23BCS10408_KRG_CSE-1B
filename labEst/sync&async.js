//synchronous programming example
console.log("Start");

function task() {
  for (let i = 0; i < 1000000000; i++) {} // time-consuming loop
  console.log("Task complete");
}

task();
console.log("End");

console.log("Start");

//asynchronous programming example
// Using setTimeout to defer the task

setTimeout(() => {
  console.log("Task complete (after 2 seconds)");// time-consuming task simulated with delay
}, 2000);

console.log("End");

