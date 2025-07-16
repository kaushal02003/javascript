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
try{
    console.log(mty);
}
catch(err){
    throw new Error("bhai pehle variable define kr");
}
// //throw can be used anywhere
let er =100;
if(er == 100){
    throw new Error("invalid JSoN");
}

//but after throw statement the code will not run further
//so we use try-catch to handle the error and run the code further or as required.
//we can also throw custom errors
throw new Error("This is a custom error message");