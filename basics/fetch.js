//fetch API
//fetch is a built-in function that allows you to make network requests
// it returns a promise that resolves to the response of the request
// now we will use fetch to get data from an API
// we will also use async and await to handle the asynchronous nature of fetch
async function getData() {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json);
        return json;
    })
}
getData();

//we can use fetch to make a POST request as well
async function postData() {
    await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({
            id: 101,
            title: "siddhu southaala",
            body: "siddhu vs aadi"
        }),
        headers: {
            "content-type": "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json);
    })
 } 
 postData();

 async function getUpdatedData(){
    await fetch("https://jsonplaceholder.typicode.com/posts/101").then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json);
        return json;
    })
 }
 getUpdatedData();