////////////////////////////////////////////////////////////////////////# object

/// singleton
/// object.create
/// const appUser = new Object();



// object literals

let mySym = Symbol('m42');

const jsUser = {
     n1: "mark",
     id: 42,
     [mySym]: "42mark",
     isAdmin: true,
     lastLogIn: [0, 1, 2, 3, 4, 5]
};
// console.log(jsUser.n1);
// console.log(jsUser["n1"]);

// jsUser.fname = "mark42";
// jsUser["email"] = "mark42@stark.com";

// console.log(jsUser[mySym]);// Symbol

// Object.freeze(jsUser);
// jsUser.userId = `${jsUser.n1}${jsUser.id}`;
// console.log(jsUser);

jsUser.function11 = function () {
     console.log('Hello_javaScript');
}
jsUser.function22 = function () {
     console.log(`Name is :: ${this.n1}`); //this Key word
}

// console.log(jsUser.function11());
// console.log(jsUser.function22());








const appUser = new Object(); // singleton
const newUser = {}; // non-singleton

// console.log(appUser);
// console.log(newUser);

newUser.id = "mark42";
newUser.name = "mark";
newUser.isAdmin = true;

// console.log(newUser);

const oldUser = {
     email: "xyz123@mail.com",
     userName: "xyz123",
     fullName: {
          fName: "xyz",
          lName: "123"
     }
};
// console.log(oldUser.fullName.fName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj12 = Object.assign({}, obj1, obj2);
// console.log(obj12);

const obj123 = { ...obj1, ...obj2, ...obj3 };//spread Operator.
// console.log(obj123);

const data = [
     {
          userName: "n1-mark",
          email: "e1"
     },
     {
          userName: "n2",
          email: "e2"
     },
     {
          userName: "n3",
          email: "e3"
     },
     {
          userName: "n4",
          email: "e4"
     },
     {
          userName: "n5",
          email: "e5"
     },
];
// console.log(data[0].userName);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty('1')); // true because checks on keys 
// console.log(obj1.hasOwnProperty('a')); // false it not check on Values.



//// # De-Structure.
const { userName } = oldUser; //De-Structure 
const { userName: uName } = oldUser; //De-Structure 
// console.log(userName);
// console.log(uName);

// JSON(JavaScript Object Notation) Formate
// {
//      "name": "mark",
//      "userName": "mark42"
// }