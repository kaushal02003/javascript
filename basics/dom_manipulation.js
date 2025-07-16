//-----window object-----
//the window object is the global object in JavaScript and represents the browser window.
//it provides access to the browser's features and functions like alert, confirm, prompt, setTimeout, setInterval, etc.
//it is the top-level object in the JavaScript environment and all global variables and functions are properties of the window object.
console.log(window.alert); //this will print the alert function
console.log(window.confirm); //this will print the confirm function
console.log(window); //this will print the whole window object these commands can be run in the browser console 
// //we can access the window object using the this keyword
console.log(this); //this will print the window object in the browser environment

// //------DOM manipulation------
// //DOM stands for Document Object Model and it is a representation of the HTML document as an object.
// //it allows us to manipulate the HTML document using JavaScript.
// //we can access the DOM using the document object.
// //we can select elements from the DOM using various methods like getElementById, getElementsByClassName, querySelector, querySelectorAll etc.
console.log(document); //this will print the whole document object which is the root of the DOM tree

//------to access elements---------
//to access elements in the DOM, we can use the following 2 methods:
//1.getElement
//2.querySelector

//-----getElement methods-----
//getElementById
//getElementsByClassName
//getElementsByTagName

//getElementById
//this method returns the first element with the specified id
console.log(document.getElementById("fpara"));

//getEelemntsByClassName
//this method returns a live HTMLCollection of elements with the specified class name
console.log(document.getElementsByClassName("first"));

//getElementsByTagName
//this method returns a live HTMLCollection of elements with the specified tag name
console.log(document.getElementsByTagName("p"));

//-----querySelector methods-----
//querySelector
//this method returns the first element that matches the specified query.
console.log(document.querySelector("#fhead")); //selects the element with id(#) fpara
console.log(document.querySelector(".first")); //selects the first element with class(.) first
console.log(document.querySelector("p")); //selects the first paragraph element

//querySelectorAll
//this method returns all the elements that match the specified query.
console.log(document.querySelectorAll(".first")); //selects all elements with class first
console.log(document.querySelectorAll("p")); //selects all paragraph elements

//------to modify elements---------
//to modify elements in the DOM, we can use the following methods:
//1.innerHTML
//2.outerHTML
//3.textContent
//4.innerText

//----innerHTML-----
let fpara = document.getElementById("fpara");
fpara.innerHTML = "this the modified first paragraph using innerHTML"; //this will change the inner HTML of the element with id fpara
console.log(fpara.innerHTML);

//----outerHTML-----
spara.outerHTML = "<h3 id = spara> modified using outerHTML from p to h2 </h3>"
console.log(spara.outerHTML); //this will change the outer HTML of the element with id spara from p to h3  

//----textContent-----
//this property sets or returns the text content of the specified node and all its descendants
let container = document.getElementById("container");
console.log(container.textContent);

//innerText
//this property sets or returns the text content of the specified node and all its descendants, but 
//it does not include the text of hidden elements.like display: none
let containerText = container.innerText;
console.log(containerText);

//------to create elements---------
//to create elements in the DOM, we can use the following methods:
//1.createElement
//------insert element into the DOM---------
//to insert the created element into the DOM, we can use the following methods:
//1.appendChild
//2.insertAdjacentElement
//3.insertAdjacentHTML


//create element
let element = document.createElement("h4");
element.innerHTML = "this element is created after.";
//appendChild
container




