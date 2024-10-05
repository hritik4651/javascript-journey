////////////////////////////////////////////////////////////////////////# Variables

const accountId = 1248513;
let accountEmail = "mark@google.com";
var accountPassword = "1593584764640";
accountCity = "Jaipur";

// accountId = 5366666; // Not allowed // we can't assign value again  .
// console.log(accountId);

/*
Prefer not to use Var
because of issue in block scope and functional scope.
*/

accountEmail = "hrx@google.com"
accountPassword = "9999998754854";
accountCity = "New Delhi";

let accountState;

console.table([accountEmail, accountPassword, accountCity, accountState])