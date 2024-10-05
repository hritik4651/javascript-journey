////////////////////////////////////////////////////////////////////////# String

let user = "stark";
let newUser = 'Iron Man';

// console.log(user);
// console.log(newUser);

// console.log(newUser + " FROM " + user); // String Concatenating 

// console.log(`This is Full String : ${newUser} FROM ${user}`); // # String interpolation.


let fullName = new String("Mark42");
// console.log(fullName);

// console.log(fullName.length);//String Property.
// console.log(fullName[3]);//String Property.


// +++++++++++++++++++++++++++++++++++++++++++++

let str = " this is JavaScript ";
let num = 42;

// console.log(num.toString());// converts to String
// console.log(typeof (num.toString()));// converts to String
// console.log(`${str.charAt(1)}${str.charAt(9)}`);// show strings Character on that place.
// console.log(str.charCodeAt(1)); // Return ASCII code Value of a Character.
// console.log(str.concat(fullName));// concat string
// console.log(str.indexOf("Script"));// give index value 
// console.log(str.lastIndexOf("pt"));// 
// console.log(str.search(/Script/));
// console.log(str.replace("Script", "script:::"));
// console.log(str.trim());
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

const newStr = str.slice(9, 19)
// console.log(newStr);

// console.log(newStr.substring(4, newStr.length));

