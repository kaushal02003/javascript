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

// A Promise can be in one of three states:
// Pending: The initial state; the operation has not yet completed.
// Fulfilled: The operation completed successfully, and the Promise now has a resulting value.
// Rejected: The operation failed, and the Promise has a reason for the failure.

//now lets try it with an asynchronous code
let promise1 = new Promise(() => {
    setTimeout(() => {
        console.log("Hi i am promise1 i have to wait 5 sec.")
    }, 5000);
})
console.log("promise1: ", promise1);   //this code would show pending as expected since the tak is still incomplete it would be done after 10 sec.
//but even after 10 sec if we write promise1 in console it still shows pending.
//when we dont use both resolve or reject in our function it would always show pending.

//to make the promise fulfiiled we do resolve argument
let promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hi i am promise2 i have to wait 6 sec.")
    }, 6000);
    resolve("I am fulfilled because i wrote resolve argument."); })
console.log("promise2: ", promise2);
//to make promise rejected we use reject argument
let promise3 = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        console.log("Hi i am promise3 i have to wait 7 sec.")
    }, 7000);
    reject("I am rejected because i used reject argument.")  //there would be a error runnning in console which can be removed by using catch.
})
console.log("promise 3: ", promise3);

//using .then() and .catch() and .finally()

let promise4 = new Promise((resolve,reject)=>{
    let fetchData = true;
    if(fetchData){
        resolve("Data successfully fetched");
    }
    else{
        reject("Data not found.");
    }
})

promise4.then((message)=>{
    console.log("usin .then() we inform: " + message);
    return(message);
}).then((message)=>{
    console.log("usin .then() we inform: " + message + " twice.");
    return(message);    
}).then((message)=>{
    console.log("usin .then() we inform: " + message + " thrice.");
    return(message);    
}).catch((error)=>{
    console.log("Error: " + error);
}).finally(()=>{
    console.log("All promise steps finished. this is finally it always shows up.");
})
//while only using single "then" we dont need to write return but if we are using "nested then" we need to use return 
//so that the next then also recieve a message for its own message argument.

//----promise.all()------
// Promise.all is a method that allows you to run multiple promises in parallel and wait for all of them to complete.
// It takes an array of promises and returns a new promise that resolves when all the input promises resolve.
// If any of the promises in the array are rejected, Promise.all immediately rejects with that error.  
// This is useful for running multiple asynchronous tasks in parallel and waiting for all of them to complete before proceeding.

let promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First")           //this a shorthand method to write setTimeout here aside resolve we can write other arguments too.
})                                               //like reject,console.log and others what need to be shown.
let promise6 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000, "Second")
})
let promise7 = new Promise((resolve,reject)=> {
    setTimeout(resolve, 3000, "Third")
})

Promise.all([promise5, promise6, promise7]
).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error("Error: ",error);
})
//promise.all would run after 3 sec or after completion of longest promise(here promise7)
//if we use promise.all with a rejected promise it would show error in console and not the value of other promises
