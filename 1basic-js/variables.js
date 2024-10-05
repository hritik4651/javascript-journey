// Variables

fullName = "Toney stark"
age = 45
price = 99.99
a = null
b = undefined
isFollw = true

fullName = "42"

console.log(fullName);


// Variable Rules

// valid
fullName = "mark" //Camel_Case 
FullName = "mark01"
fullName42 = "Iron"
_fullName = "Iron men"
$fullName = "mark42"

// invalid
// 123fullName="hrx"
// #fullName="abc"
// full*Name="xyz"


var fName = "Toney"      // we don't use var in Actual project now Days...
console.log(fName);

var fName = "stark"
console.log(fName);



let firstName = "Mark"
console.log(firstName);

// In Let we can't declare same name variable in a Scope.
// let firstName= "stack"  

{
     let a = 3
     console.log(a);
}
{
     let a = 10
     console.log(a);
}

const pi = 3.14
console.log(pi);


// In const we can't declare same name variable and re-assign Value in a Scope.
// const pi = 3.1415
// pi = 3.1415
console.log(pi);




//// ###### Data types

/// 7 primitive datatypes

// string
let full_name = "toney stark"
console.log(typeof full_name);
console.log(full_name);

// number
let marks = 56
console.log(typeof marks);
console.log(marks);

// boolean
let idAdmin = false
console.log(typeof idAdmin);
console.log(idAdmin);

// null
let temp = null
console.log(typeof temp);
console.log(temp);

// undefined
let user
console.log(typeof user);
console.log(user);

// symbol
let money = Symbol("xyz1")
console.log(typeof money);
console.log(money);

// bigint
let count = BigInt("665459849849446546589")
console.log(typeof count);
console.log(count);


/// Non-Primitive datatype

// object
const obj1 = {
     fName: "Toney",
     lName: "Stack",
     id: 42,
     idAdmin: true
}
console.log(obj1);
console.log(obj1.fName);
console.log(obj1["lName"]);

obj1.fName = "Iron"
obj1["lName"] = "Men"
console.log(obj1);






const product = {
     title: "Parker Standard Ball Pen (Black)",
     rating: 4,
     offer: true,
     price: 270
}
console.log(product);

const users = {
     username: "mark42",
     post: 195,
     followers: 500000,
     nname: "mark",
     bio: "i'm ironmen !"
}
console.log(users);