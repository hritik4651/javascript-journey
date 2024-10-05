////////////////////////////////////////////////////////////////////////# Data types

"use strict"; //treat all js code as a newer version

// alert(3+3); // we are using nodejs, not browser

console.log(5
     +
     5); // code readability should be high.

console.log('Mark');


// primitive datatype

// number
let balance = 10000;
console.log(balance);

// string
let fullName = "iron man";
console.log(fullName);

// boolean
let isAdmin = true;
// isAdmin = false;
console.log(isAdmin);

// null
let temp = null;
console.log(temp);

// undefined
let member;
console.log(member);

// bigint
let log = BigInt("1351848494975949494949999999887722");
console.log(log);

// symbol
let sign = Symbol("xyz");
console.log(sign);




// non-primitive datatype

// objects
const obj1 = {
     fName: "Mark",
     id: "42",
     isAdmin: true
};

console.log(obj1);

// array
const arr1 = [2, 3, 4, 5, 6];
console.log(arr1);

// function
const myFunction = function () {
     console.log('hello world');
}
myFunction();