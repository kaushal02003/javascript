const accountId = 12345
// we cannot change value of a const variable
var accountEmail = "kp@ss.cm"
let accountPassword = "3241"

/* Today var is not used because it is function scoped.
   We use let because it is block scoped. */

accountCity = "jaipur"

 
accountEmail = "kaushal@gm.cm"
accountPassword = "6452"
accountCity = "haldwani"

console.log(accountCity)
console.table([accountId , accountEmail , accountPassword])