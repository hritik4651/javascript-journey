////////////////////////////////////////////////////////////////////////# ## primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

// let fName = "iron men"; // string
// console.log(typeof fName);
// console.log(fName);

// let score = 100; //number.
// let scoreValue = 100.3; //number.
// console.log(typeof score);
// console.log(typeof (scoreValue));


// const isLogIn = true; //boolean.
// console.log(typeof isLogIn);


// const outSideTemp = null; //null.
// console.log(typeof outSideTemp); // null is Object type.


// let userEmail; //undefined.
// console.log(typeof userEmail);


// const id = Symbol('123'); //Symbol. // it gives unique value
// const anotherId = Symbol('123'); //Symbol.   // it gives unique value
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(id === anotherId); //false


// let bigNum = 654654654654654654654654654n;
// console.log(typeof bigNum);






//////////////////// ## Reference (Non primitive).

// //  Array, Objects, Function.

// let days = ["monday", "tuesday", "wednesday"];
// console.log(typeof days);
// console.log(days);


// let obj = {
//      fullName: "javascript",
//      id: 51,
//      isObj: true
// };
// console.log(typeof obj);
// console.log(obj);

// let func = function () {
//      console.log('Hello');
// }
// console.log(typeof func); //function object.
// func();


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

////////////////////////////////////////// stack (Primitive) , Heap (Non-primitive).


///////////////////////# Stack(Primitive).
// let myName = "mark";
// let fullName = myName;
// fullName = "mark42"
// console.log(myName);
// console.log(fullName);

///////////////////////# Heap(Non-primitive).
// let obj1 = {
//      email: "abc@google.com",
//      upi: "user@pytm"
// };
// let obj2 = obj1;
// obj2.email = "mark42@stark.com";
// console.log(obj1.email);
// console.log(obj2.email);



