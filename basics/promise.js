//----promises------
// A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.
// It acts as a placeholder for a value that will be available in the future, either when the operation completes successfully (resolved) or fails (rejected).
// Promises help you write cleaner code for tasks like fetching data, waiting for timers, or reading files, instead of using nested callbacks.
// You create a Promise with the `new Promise()` constructor, which takes a function with two arguments: `resolve` and `reject`.
// You can attach handlers to a Promise using `.then()` for success and `.catch()` for errors.


//basic example of a promise
let newPromise =  new Promise( ()=> {
    console.log("hello");
} )

console.log(newPromise);

