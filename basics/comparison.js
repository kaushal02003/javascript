console.log(2 > 1); //if the 1st number is greater than 2nd number (This is comparison)
console.log(2 < 1); //if the 1st number is lesser than 2nd number  (This is comparison)
console.log(2 == 1); //if the 1st number is equal 2nd number       (This is equality check)
console.log(2 >= 1); //if the 1st number is greater than or equal to 2nd number (This is comparison)
console.log(2 <= 1); //if the 1st number is lesser than or equal to 2nd number  (This is comparison)

// In javascript we can also compare different datatypes with these operator but it sholdnt be practised since sometimes 
// it doesn't gives the expected result

console.log("2" > 1);  
console.log("02" > 1);
console.log("2" == 2);

console.log(null > 0);
console.log(null == 0);// the answer here is false since equality operator doesn't convert null for comparison
console.log(null >= 0);// the answer here is true since comparison operator convert diffrent dataype to same datatype
                       //  like here null is convereted to 0

console.log(undefined >= 0); // undefined is converted to NaN
console.log(undefined != 1); // undefined gives true when we compare it with loose inequality to any number
console.log(undefined != 0);


