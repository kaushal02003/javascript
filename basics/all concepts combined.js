console.log('hello world');
console.error('this is an error');
console.warn('warning');

//if we want to highlight a word using quotation inside a string we do that using \(backslash)
console.log("my \"name\" is kaushal")

// ------ variable types -----
// var let const
var a = 'dd';
let b = 'bb';
const c = 'ff';

// -----primitive datatypes------
// string number boolean null undefined
//these datatypes store their value in stack memory.
 const name = 'kp';
 const aged = 13;
 const rate = 3.5;
 const iscool = true;
 const x = null;
 const y = undefined;
 let z;

// now to check datatype we use

console.log(typeof name);
console.log(typeof rate);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof z);


//------Operators--------
//types of operator

//-----arithmatic operators-------
console.log(2+3);//addition operator
console.log(3-2);//subtraction operator
console.log(3/2);//division operator
console.log(3%2);//remainder operator

//--------assignment operator-------
let gg = 3;
let aaa = gg;
console.log(aaa);

//------ternary operator(comparison operator)-------
let age = 19;
let status1 = (age>18)? "Can vote":"cannot vote" //this is also the syntax which is used for ternary operator
console.log(status1);
//here we saw if the given condition was true the first string between ("":"") was printed and
//if it was false second string would be printed

//---logical operator--------

//these are used to connect 2 or more conditions together to make decision based on all 
let ans = (true && true && true);
console.log(ans);
//here all conditions should be true if not done so it would give false
//this true false can be exchanged above by conditions like 2<3, 3>2 etc. but the basic condition remains same

let ans1 = (true || false || false);
console.log(ans1);
//if any one of the given condition is true it would give true
//this true false can be exchanged above by conditions like 2<3, 3>2 etc. but the basic condition remains same

let ans2 = !(true);
console.log(ans2);
//this changes the condition from true to false and vice versa
//this true false can be exchanged above by conditions like 2<3, 3>2 etc. but the basic condition remains same

//if there is anything non-boolean in these commands then the answer would be based on its falsy and truthy
//like undefined,0,NaN,null,false,"empty string" these are falsy
//anything other than falsy is truthy(non-empty strings are truthy)

console.log(false || "kaushal");
//now it would print the value which is true which is kaushal here

//--------bitwise operator-----
console.log(2&5); //bitwise and operator
console.log(2|5); //bitwise or operator
console.log(2^3); //bitwise xor operator
console.log(5<<1); //bitwise left shift operator
console.log(10>>1); //bitwise right shift operator
console.log(~0); //bitwise not operator

//----------conditionals-----------
//there are two types of conditionals: if-else , switch
//----------if - else ----------
let num = 5;
if(num<4){
    console.log("given number is lesser than four.")
}
else if(num<6){
    console.log("given number is greater than four but lesser than six.")
}
else{
    console.log("given number is greater than four and six.")
}
//--------switch------
let num1 = 3;
switch(num1){
    case 1:console.log("if num1 is 1 print this.")
    break;
    case 2:console.log("if num1 is 2 print this.")
    break;
    case 3:console.log("if num1 is 3 print this.")
    break;
    case 4:console.log("if num1 is 4 print this.")
    break;
    default:console.log("if num1 is anything else print this.")
}

//--------Loops--------
//for loop(loops through a block of code number of times)
//in for loop we initialize , gives condition and performs updation inside the loop function and then the logic is given inside loop.
for(let i = 0; i <=5; i++){
    console.log(`for loop number: ${i}`);
}
//here we would use break(break is used to stop the loop even before reaching the end)
for(let i=1; i<=5; i++){
    if(i==3){
        break;
    }
    else{
        console.log(`for loop number: ${i}`)
    }
}
//here we would use continue(continue is used to skip the iteration while looping) 
for(let i=1; i<=5; i++){
    if(i==3){
        continue;
    }
    else{
        console.log(`for loop number: ${i}`)
    }
}

//----------while loop(here only condition can be given inside loop)----------
//but it is similar to a for loop as i= 0 is initialising then inside loop i<=10 is condition and i++ performs the updation.
{let i = 0;
while(i <= 5){
    console.log(`while loop number: ${i}`);
    i++;
}
}
/*as we see here in this loop we haven't provided updation in if so it can become an infinite loop as it reaches 3
the continue would make it skip the loop for 3 and the value of r wouldn't change and remains 3 then again loop will run
and console.log then again inside "if" which would "continue" it and skip anything below continue and value of r will always remain 3.
let r = 1;
while(r<5){
    console.log("inside the loop");
    if(r==3){
        continue;
    }
    else{
        console.log(r);
        r++;
    }
    
} */
//this would run normally skiiping only r=3.since here before continue the value has changed to 4 through r++.
let r = 1;
while(r<5){
    console.log("inside the loop");
    if(r==3){
        r++;
        continue;
    }
    else{
        console.log(r);
        r++;
    }
    
}

//--------do while loop------
//do while loop will always run 1st iteration because it recieves the condition(here while(d<5)) after the logic(here console.log) is performed.
let d = 1;
do{
    console.log(`inside do while loop : ${d}`)
    d++;
}while(d<5);

//-------string--------

//we can create primitive strings using double quotes or single quotes
let nme = "Kaushal Pandey";
console.log(nme);

//we can also create strings using below method
let frstNme = new String("Kaushal Pandey");
console.log(frstNme);
//this method creates string objects not primitive strings and they are mutable and they give false when === with string.

//now to print both letters in different line we do
let nme1 = `Kaushal
Pandey`;
console.log(nme1);
//----operations in string:-----
// ----concatination------
//using +
console.log('my name is ' + name);
//concatination can be done using backtick method also
// -----tempelate string------
// here we use backticks not regular single quote
console.log(`my name is ${name}`);

const s = 'Hello World';
// to find the length of a string
// since its a property there are no perenthesis after completion
console.log(s.length);
// to change characters in uppercase
// since its a method there are perenthesis after completion
console.log(s.toUpperCase());
// to change to lowercase
console.log(s.toLowerCase());
// to pick out a particular part from a string
console.log(s.substring(2));
console.log(s.substring(0,5));
// to split the string into an array
console.log(s.split());
// now it can be used in multiple ways

// we can split each string element as array
console.log(s.split(''));
// we can split elements which are divided by spaces 
// however you want to divide you can specify it inside split method
console.log(s.split(' '));
//we can divide the elements through their particular names
console.log(s.split('World'));
//this will give the value which are before the word world and after it as an array

//here we are spliting using \\ we cannot use \ since \ is a special character itself and cannot be written simply inside split so
//we have to use\\(double forward slash) to make it work.we have used single forward slash at top of page. 
let intro = "my \\name\\ is\\ pankaj";
console.log(intro.split("\\"));

//-------functions-------
//a basic functio is firstly written and then called.
function sum(a,b){
    console.log(a+b);
}
sum(4,8);
//we can also use return which will store the value of function inside it and then if the function is stored inside
//another variable then if console logged would show the value of the function returned
function FULLNAME(firstName,lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
    //below return the statement is unreachable
    let a=1;
    let b =4;
    let sim = a+b;
    console,log(sim);
}
let NM = FULLNAME(7,7);
console.log(NM);

//other way of declaring function
let squareNo = function(l){
    Sqr = l**2;
    return Sqr;
}
console.log(squareNo(5));

//the most used way of declaring function today is using arrow called arrow function
let getExp = (x,y)=>{
    let Ex = x**y
    return Ex;
}
console.log(getExp(2,6));

//reference data types
// -array
//-object
//-function
//these data type store their value in heap memory but to access the heap memory we need a reference pointer(their name)
// which is stored in stack memory.

// ------arrays-----
// this is called constructor method 
// creating array old method not used now much
const brr = new Array('apple','banana','mango');
console.log(brr);

//  new method is using []

const arr = ['apple','banana','mango'];
console.log(arr);

//  to add values in an array
arr[3] = 'amla';
console.log(arr);

// this method is not efficient so we use push method
// this will add elements from the last of the series
arr.push('kela','tt','gg');
console.log(arr);
//this will remove the last value from the array
arr.pop();
console.log(arr);

// to add element in first
arr.unshift('strawberry');
console.log(arr);
//to remove the first element
arr.shift();
console.log(arr);

//another method to add and remove something in array is using splice
arr.splice(1,1,82);
console.log(arr);

// to check if something is a Array
console.log(Array.isArray(arr));

console.log(Array.isArray('mango'));

// to find index of an element in an array
console.log(arr.indexOf('mango'));

//to concatinate 2 or more arrays we use
let ba = ["hi","bye"];
let ca = arr.concat(ba);
console.log(ca);

//--------map----------
//this is used to iterate through an array and perform some operation on each element of the array and create a new array with the results.
//it doesn't change the original array but creates a new one with the results.
//using map method to create new array
//this is used to store functions that can be directly applied into objects and arrays(or any stored value).
let arrn = [10,20,30];
console.log(arrn);
//And also while we write simple single line functions with very little logic involved we can
//directly create functions using arrow without using curly braces.
let sqrNo = arrn.map((noFromArray)=>  noFromArray**2
)
console.log(sqrNo);

arrn.map((noFromArray,index)=>{
    console.log(noFromArray);
    console.log(index);      
})

//--------filter----------
//this is used to filter out the values from an array based on a condition and create a new array with the filtered values.
//it doesn't change the original array but creates a new one with the filtered values.
//using filter method to create array
let arri = [10,20,23,19,67,54,77,"gola","pankaj","kaushal",true,undefined];
let arru = arri.filter((number)=>{
    return number%2===0;
    //it can also be done like
    //it wouldn't run because its below return
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
})
console.log(arru);
let arrt = arri.filter((value)=>{
    return typeof(value) === "string";
    //don't use  the word String here to compare it would return empty array use "string" this would create the required array.
    //can also be done in this way
    //code doesn't run because its below return
     if(typeof(value)==="string"){
        return true;
    }
    else{
        return false;
    }
})
console.log(arrt);

//--------reduce----------
//this is used to reduce the array to a single value by applying a function on each element
//using reduce method to create array
//explained in copy
let brre = [10,20,30,40];
let brri = brre.reduce((acc,curr)=>{
    return acc + curr;
})
console.log(brri);

//using sort method to sort and create array
//this can sort string values in their alphabetical order
let crr = ["banana","apple","egg","dream","cake"]
console.log(crr.sort());
//to arrange them in opposite alphabetical order
let crrt = crr.sort((a,b)=>{
    return b.localeCompare(a);
});
console.log(crrt);

let crre = [94,77,45,8,1,9]
// console.log(crre.sort());
//this would not sort the array in ascending order because it would just compare the first value ang give results
//it works well for strings but not number

//to make it work for number we do
let crri = crre.sort((a,b)=>a-b);
console.log(crri);
//to make it in descending order
let crry = crre.sort((a,b)=>b-a);
console.log(crry);

//-------for-each loop-------
//using for-each loop in array
//this is used to iterate in an array to get its values and index
let drr = [10,20,30];
drr.forEach((value,index,kll) => {                         //the order here is value, index, array and this should be maintained
    console.log("value:",value,"index:",index,"array:",kll);
});

//----for-of loop-----  
//this is used to iterate in an array and strings to get its values only
let arr1 = "kaushal"
for(let value of arr1){
    console.log(value);
}


//----functions----------
//created using function keyword
//these are hoisted
function greet(name){
    console.log(`hello ${name}`);
}
greet("kaushal");

//created using named variable(function expression)
//these are not hoisted
let sayHello = function(name){
    console.log(`hello ${name}`);
}
sayHello("pankaj");

//created using arrow function
//these are not hoisted
let sayHi = (newName)=>{
    console.log(`hello ${newName}`);
}
sayHi("gola");

//hoisting
//hoisting is a process in which the function declaration is moved to the top of the code(scope)
summation(2,3);
//here the function is called before it is declared but it still works because of hoisting
//but this doesn't work for function expressions and arrow functions
function summation(a,b){
    console.log(a+b);
}
//hoisting also works for variables declared using var keyword
console.log(j);
var j=10;
//this works because var is hoisted to the top of the code(scope) but would give undefined because only var and j would move up not the value 10
//this doesn't work for variables declared using let and const keywords
//------class------//
//class is a blueprint for creating objects
//class level hoisting is also not possible
class hum{};
let person1 = new hum();
console.log(typeof(person1));

//functions => As first class citizens
//functions can be passed as arguments to other functions, returned from functions, assigned to variables,used as property in objects,
//and stored in data structures like arrays and objects.

//----assigning function to variable----
let greetUser = function(){
    console.log("greeting of the day");
}
greetUser();
//-----function as argument in another function-----
let greeting = (greetFn,FirstName)=>{
    console.log(`hello ${FirstName}`);
    greetFn();
}
greeting(greetUser,"kaushal");

//-----function as return value from another function-----
let square = (num)=>{
    return function(){
        return num * num;
    }
}
let answ = square(10);//this would return a function which can be called later
console.log(typeof(answ));
console.log(answ(10));//this would call the function returned by square and give the value of 100

//-----function as property in object-----
let object = {
    FirstName : "kaushal",
    Great : ()=>{
        console.log("hello everyone");
    }
}
console.log(object.FirstName);
object.Great();

//------function as element in array-----
let arrFun = [
     () => {
        console.log("function1");
    },
    () => {
        console.log("function2");
    }
]
arrFun[0]();

//variable scoping
//it can be divided into 3 parts 
//1.global scope : variables declared outside any function or block are in global scope and can be accessed from anywhere in the code.
//2.function scope : variables declared inside a function are in function scope and can only be accessed inside that function.
//3.block scope : variables declared inside a block (like if, for, while or just empty{}) are in block scope and can only be accessed inside that block.
//let and const are block scoped variables 
//var is function scoped variable since it can be accessed outside any block(like if, for, while or just empty{}) but only inside the function.
//all are globally scoped if just declared outside any function or block.

//----globally scoped-----
let t =10;
if(t==10){
    console.log("t is 10");
}
//----block scoped-----
{
    let t=20;
    const name = "kaushal";
    console.log("name is block scoped:",name); // kaushal
    console.log("t is block scoped:",t); // 20
}
//----function scoped-----
for (var i = 0; i < 3; i++) {   //var is function scoped so i and squar can be accessed outside the block
  var squar = i * i;
  console.log(squar); // 0, 1, 4
}
console.log(squar); // 4
console.log(i); // 3
function test() {
    var i=1;
    console.log("i is function scoped:",i);
}
test();   // console.log(i); // this would give error because i is not defined outside the function

//----temporal dead zone-----
//this states that if we try to access a variable before it is declared(using let or const), it will throw a ReferenceError.
// console.log(p); this would give error because p is not defined yet
// console.log("hello");
// console.log("world"); for p anything above line 621 is temporal dead zone
let p =5;
console.log(p); // this would work because p is defined now

//----classes-----
//classes are a blueprint for creating objects with properties and methods.
class human{
    age = 18; //properties
    #wt = 50;//using # makes it private property
    ht = 6;
    //behaviour(method)
    walk(){
        console.log("walking helps me loose weight: ",this.#wt);  //private property can only be accessed inside the class
    }
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(newWt){
        this.#wt = newWt;
    }
}
let person2 = new human(); //creating an object of class human
console.log(person2);
person2.walk(); //calling the method of class human

// console.log(wt);
// console.log(person2.#wt);
// console.log(this.#wt);
//these all would give error because #wt is a private property and can only be accessed inside the class human
//to access private property we use getter or setter methods inside the class
//-----getter and setter methods-----
console.log(person2.fetchWeight);
console.log(person2.modifyWeight=60);

//-----default parameters-----
//these are used to set default values for function parameters if no value is passed while calling the
function getAge(name="kaushal",age=18){     //here kaushal and 18 are default values if nothing is inputted these will show up rather than undefined.
    console.log("name:",name,"age:",age); 
}
getAge();// this will print name: kaushal age: 18
getAge("pankaj",19);// this will print name: pankaj age: 19
getAge("gola");// this will print name: gola age: 18(default value of age)
getAge(null,null);// this will print name: null age: null because null is passed as value so it will not take default value
getAge(undefined,undefined);// this will print name: kaushal age: 18 because undefined is passed as value so it will take default value

function newAge(age){
    return 20;
}
getAge("kaushal",newAge());//this way we can also pass a function as a parameter which will return a value.

//-----in-built objects-----
//these are objects that are already defined in JavaScript and can be used directly without creating them
//-Math object
//-Date object

console.log(Math.PI); //this will give the value of pi
console.log(Math.random()); //this will give a random number between 0 and 1
console.log(Math.floor(5.2)); //this will give the floor value of 5.2 which is 5(it round down the value to nearest integer)
console.log(Math.ceil(5.2)); //this will give the ceil value of 6(it round up the value to nearest integer)
console.log(Math.round(5.2)); //this will give the rounded value of 5.2 which is 5
console.log(Math.max(5,10,15)); //this will give the maximum value from the given values
console.log(Math.min(5,10,15)); //this will give the minimum value from the given values
console.log(Math.pow(2,3)); //this will give the value of 2 raised to the power of 3 which is 8
console.log(Math.sqrt(16)); //this will give the square root of 16 which is 4
console.log(Math.abs(-5)); //this will give the absolute value of -5 which is 5(changes negative to positive)
console.log(Math.trunc(5.2)); //this will give the integer part of 5.2 which is 5
console.log(Math.sign(-5)); //this will give the sign of -5 which is -1
console.log(Math.sign(5)); //this will give the sign of 5 which is 1
console.log(Math.sign(0)); //this will give the sign of 0 which is 0

let currentDate = new Date(); //this will give the current date and time
console.log(currentDate);
let specificDate = new Date('2025-07-14 7:15'); //this will give the specific date
console.log(specificDate);
let newDate = new Date(2025, 6, 14, 7,15); //this will give the specific date with year, month and day
console.log(newDate); //note that month is 0 indexed so 9 means October
console.log(newDate.toLocaleString());//this will give the date in local format
console.log(newDate.toDateString());//this will give the date in string format
console.log(newDate.toTimeString());//this will give the time in string format
console.log(newDate.getFullYear());//this will give the year of the date
console.log(newDate.getMonth());//this will give the month of the date (0-11)
console.log(newDate.getDate());//this will give the date of the month (1-31)
console.log(newDate.getDay());//this will give the day of the week (0-6) where 0 is Sunday and 6 is Saturday
//the indexing in date object usually starts from 0 but just for day it starts from 1

//-------objects-------
//objects are collections of key-value pairs where keys are strings and values can be any data type
// creating objects

let person = {
    firstName : 'john' ,
    lastName : 'wick' , 
    age : 30 , 
    hobbies : ['dancing','killing'],
    address : {
        street : '50mainstrt' ,
        city : 'boston' ,
        state : 'nevada'
    }
}
console.log(person);

//-------for-in----------
//using for in loop in objects
//this is used to iterate through enumerable properties like in an object to get its keys and values.
for(let key in person){
    console.log("key:",key);
}
// printing particular object values
console.log(person.hobbies[1]);
// adding new values in object 
person.email = 'johnwick@cc.com';
console.log(person);
// destructuring an object means 
// pulling a values out of object in the form of variable
let {firstName,lastName} = person;
console.log(firstName);

//this is how to create a shallow copy of the object
//shallow copy : in this an object is directly assigned with a new variable which works as a new reference pointer which is still 
//pointing to the previous object data(in heap) not creating another copy of the object
let ddf = person;
ddf.firstName = "sohan";
console.log("person:",person.firstName);
console.log("ddf:",ddf.firstName);

// array of objects

const todo = [
    {
        id : 1,
        name : 'kp' ,
        iscompleted : true
    },
    {
        id : 2,
        name : 'jp' ,
        iscompleted : true
    },
    {
        id : 3 ,
        name : 'lp',
        iscompleted : false
    }
    
]
console.log(todo);
console.log(todo[1].name);

console.log(todo);
/*to convert the code to json(a text based format for 
storing and exchanging data such that it is both machine parsable and 
human readable)*/
let todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//------object cloning------
//cloning is creating a new object(not just a shallow copy) with the same properties and values as the original object
//this can be done using 3 methods
//1. using iteration method
//3. using spread operator
//2. using Object.assign() method

//1. using iteration method
let obj = {
    name : "kaushal",
    age : 30,
    hobbies : ["swimming","playing"]
}
console.log(obj);
let cloneObj = {};
for(let key in obj){
    let value = obj[key];
    cloneObj[key] = value;
}
console.log(cloneObj);
//we can confirm that the cloneObj is a new object and not just a shallow copy by changing the value of cloneObj
cloneObj.name = "pankaj";
console.log("original object:",obj);
console.log("cloned object:",cloneObj); //we see that the name in cloneObj has changed but not in obj meaning these both are different objects

//2. using spread operator
let cloneObj2 = {...obj};
console.log(cloneObj2);

//3. using Object.assign() method
let cloneObj3 = Object.assign({}, obj);
console.log(cloneObj3);

//-------garbage collector-------
//JavaScript has a built-in garbage collector that automatically frees up memory by removing objects that are no longer needed.
//It works by identifying objects that are no longer reachable from the root of the program and removing them from memory.
//This helps to prevent memory leaks and keeps the program running efficiently.
//but we have no control over the garbage collector and it runs automatically in the background.

//----error handling----
//there are 2 major types of errors in JavaScript
//1.compile time errors : these are errors that occur when the code is being compiled and are usually syntax errors or type errors.
//2.runtime errors : these are errors that occur when the code is being executed and are usually logical errors or reference errors.

//compile time error
//syntax error
// console.log("hello"; //this will give a syntax error because the closing parenthesis is missing
//type error
// let num = 10;
// num = "hello"; //this will give a type error because we are trying to assign a string to a number variable

//runtime error
//reference error
// console.log(x); //this will give a reference error because x is not defined


//JavaScript provides a way to handle errors using try-catch blocks.

try{
    console.log("line before error");
    console.log(mi);
    console.log("line after error");
}
catch(error){
    console.log(1,".error occured:",error); //this will catch the error and print the whole error
    console.log(2,".error ocuured:",error.message); //this will catch the error and print the error message
    console.log(3,".error name:",error.name); //this will print the name
}
finally{
    console.log("this will always run"); //this will always run whether there is an error or not
}

//if there is no error in try the catch block will not run and the finally block will run

//throw error
//we can also throw our own errors using the throw statement
// try{
//     console.log(mty);
// }
// catch(err){
//     throw new Error("bhai pehle variable define kr");
// }
// //throw can be used anywhere
// let er =100;
// if(er == 100){
//     throw new Error("invalid JSoN");
// }

//but after throw statement the code will not run further
//so we use try-catch to handle the error and run the code further or as required.
