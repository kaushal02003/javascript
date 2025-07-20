let text = document.getElementById("text");
let button = document.getElementById("button");

function changeText(event) {    //this function is the listener since it answer the call of the event and work as specified.
    console.log(event); //this will console log the event which is triggered. 
    text.textContent = "How are you!";
}
button.addEventListener("click",changeText);
//to remove the eventListener
// button.removeEventListener("click",changeText);

//-----Event Object-----
//this a global object that stores all the event ocuuring inside.

//-----preventDefault-----
//this is used to restrict the default action which is performed by a specific element.

let anchor = document.getElementById("anchor");
anchor.addEventListener("click",function(event){
    event.preventDefault();
    anchor.textContent = "i don't work";
})

//Add multiple event listener
//To add multiple event listener we have to optimize the code and need to keep in mind certain things like,
//1.Instead of assigning multiple event listener to each element assign single one to a parent element.
//2.Assigning event listener to one element can improve the performance of website.

//now lets make an event listener which alerts on click on any para

//see in copy for better understanding

//-----least optimized way----
// let paras = document.querySelectorAll("p");  //so querySelectorAll returns result in a form of an array.
// console.log(paras[0]);
// paras.forEach((value,index) => {                     
//     paras[index].addEventListener("click",function(event){
//     console.log(event);
//     alert("Hi the paragraph " + event.target.innerText +" is clicked");} )
// })
//this is least optimized because here each para is given its own listener due to which there are 4 listener.


//---sligthly optimized way---
// let paras = document.querySelectorAll("p");
// console.log(paras[0]);
// function multiClick(event){
//     console.log(event);
//     alert("Hi the paragraph " + event.target.innerText +" is clicked");
// }
// paras.forEach((value,index) => {                    
//     paras[index].addEventListener("click",multiClick);    
// })

//here we did was we were iterating over each para so more optimized way is that we use the parent element to iterate over all of them.

//----most optimized way----
// let newDiv = document.getElementById("newDiv");
// console.log(newDiv);
// function outcome(event){
//     console.log(event);
//     alert("Hi the paragraph " + event.target.innerText +" is clicked");
// }
// newDiv.addEventListener("click",outcome);
//here we even click outside para boxes there also our click counts as it the event target is the whole div,
//so to not click on the div we can change its css to inline or something else so we don't touch it(do only if needed).

//now if we want the click to only work for span content not for the paragraph
let newDiv = document.getElementById("newDiv");
console.log(newDiv);
function outcome(event){
    console.log(event);
    if(event.target.nodeName === "SPAN"){
    alert("Hi the paragraph " + event.target.innerText +" is clicked");
}
}
newDiv.addEventListener("click",outcome);


//this will help us know how to dynamically add js after the dom content is loaded
document.addEventListener("DOMContentLoaded",function(){
    let onLandingScript = document.createElement("script");
    onLandingScript.textContent= `console.log("this is after dom loaded content");
                                alert("this is after dom loaded content");`
    document.body.appendChild(onLandingScript);
});


