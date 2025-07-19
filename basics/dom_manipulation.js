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
//1.appendChild : this method appends a node as the last child of a node.
//2.insertAdjacentElement : this method inserts a node at a specified position relative to the element.
//3.insertAdjacentHTML 

//the positions where we can insert the element using insertAdjacentElement are:
//beforebegin : before the element itself
//afterbegin : just inside the element, before its first child
//beforeend : just inside the element, after its last child 
//afterend : after the element itself


//create element
let element = document.createElement("h4");
element.innerHTML = "this element is created after.";
//appendChild
container.appendChild(element);
//insertAdjacentElement
let newElement = document.createElement("h5");
newElement.innerHTML = "this element is also created after.";
container.insertAdjacentElement("beforebegin",newElement);

//----remove element-------
//to remove an element from the DOM, we can use the following methods:
//1.remove : this method removes the element from the DOM.
//2.removeChild : this method removes a child element from the DOM.
//3.replaceChild : this method replaces a child element with a new element.

//remove
let removeElement = document.getElementById("fpara");
removeElement.remove(); //this will remove the element with id remove from the DOM

//removeChild
let tpara = document.getElementById("tpara");
container.removeChild(tpara);

//----styling elements-------
//to style elements in the DOM, we can use the following methods:
//1.style : this property allows us to set the style of the element.
//2.CSStext : this property allows us to set the CSS text of the element.
//3.setAttribute : this method allows us to set the attribute of the element.
//4.className : this property allows us to set the class name of the element.
//5.classList : this property allows us to add, remove, toggle classes of the element.


//----style-----
let firstPara = document.getElementById("firstPara");
//using it as a getter property
console.log(firstPara.style);
//using it as a setter property
firstPara.style.backgroundColor = "red";

//----CSStext-----
let secondPara = document.getElementById("secondPara");
//using it as a getter property
console.log(secondPara.style.cssText);
//using it as a setter property
secondPara.style.cssText = "background-color: blue;"
console.log(secondPara.style.cssText); //this property dont just change the attribute written in code but also removes the other attributes
//which were previously written.

//----setAttribute-----
let secondDiv = document.getElementById("secondDiv");
//it can only be used as a setter property
secondDiv.setAttribute("class","setDiv"); //we set the class of secondDiv to setDiv.
console.log(document.querySelector(".setDiv"));
//we can also use it to set css
secondDiv.setAttribute("style","background-color: yellow;")
console.log(document.querySelector(".setDiv"));

//----className-----
let div = document.getElementById("div");
//using it as a getter property
console.log(secondDiv.className);
//using it as a setter property
div.className = "newDiv";
console.log(div.className);

//----classList-----
let nextDiv = document.getElementById("nextDiv");
//using it as a getter property
console.log(nextDiv.classList);
//using it as a setter property
//to add
nextDiv.classList.add("thirdClass");
console.log(nextDiv.classList);

//to remove
nextDiv.classList.remove("firstClass");
console.log(nextDiv.classList);

//to toggle
//to hide
let response = nextDiv.classList.toggle("secondClass");
console.log(response);
console.log(nextDiv.classList);
//to make it appear back
let response1 = nextDiv.classList.toggle("secondClass");
console.log(response1);
console.log(nextDiv.classList);

//to check if it contains a class
let response2 = nextDiv.classList.contains("firstClass");
console.log(response2);
let response3 = nextDiv.classList.contains("secondClass");
console.log(response3);







