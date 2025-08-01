//async
//async function is a function that returns a promise
// it allows you to write asynchronous code in a synchronous style

async function getData(){
    setTimeout(() =>{
        console.log("Data fetched");
    },1000);
} 
//async returns a promise this can be seen in the console
console.log(getData());
// calling the async function
getData();
//since async functions return a promise, you can use .then() to handle the result similarly we can also use .catch() to handle errors
getData().then(()=>{
    console.log("Data processing complete");
})

//before using await, lets learn fetch
//fetch is a built-in function that allows you to make network requests
// it returns a promise that resolves to the response of the request

//using await
// await can only be used inside an async function
// it pauses the execution of the function until the promise is resolved

async function collectData(){
    //using fetch to get data from an API
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //parse the response as JSON
    let data = await response.json();
    console.log(data);
}
collectData();
//now lets understand the scenario above
// the fetch function returns a promise that resolves to the response of the request
// the await keyword pauses the execution of the collectData function until the promise is resolved 
// once the promise is resolved, the response is stored in the response variable
// then we use the json() method to parse the response and store it in the data variable
// finally we log the data to the console






