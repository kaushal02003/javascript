let score ="33abc"
let newscore = true
let mynewscore = null
let hisnewscore = undefined

console.log(typeof score);   
console.log(typeof(score));    /*both above and below code gave same output but one is the direct use of function and other one is by  
                                 using method */

//now for conversion of the score into number datatype

let scoreInNumber = Number(score);

console.log(typeof scoreInNumber); //NaN when teste din typeof gives value number 
console.log(scoreInNumber); // this would give the output NaN(i.e. not a number)since abc or strings cannot be converted into numbers

let newscoreInNumber = Number(newscore);

console.log(newscoreInNumber);   //boolean when converted in number gives values 0 and 1 

let mynewscoreInNumber = Number(mynewscore);

console.log(mynewscoreInNumber); // null when converted in number gives value of 0

let hisnewscoreInNumber = Number(hisnewscore);

console.log(hisnewscoreInNumber);  // undefined when converted in number gives back NaN

let loggedIn = 1
