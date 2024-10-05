////////////////////////////////////////////////////////////////////////# function

function myFunction() {
     console.log('Hello_World');
}
// myFunction();

function addNumber(no1, no2) {
     console.log(no1 + no2);
}
// addNumber(2, 5);// 7
// addNumber(2, "5");// 25
// addNumber(); // NaN

// const res = addNumber(5, 5); // it not return any Value.
// console.log(res); // undefined 

function mulNumber(a, b) {
     return a * b;
}
// const res1 = mulNumber(2, 3); // it return a Value.
// console.log(res1); // 6

function hello(name) {
     if (!name) {
          console.log('Please Enter a Name');
          return
     }
     return `Hello, ${name} `
}
// console.log(hello("mark"));
// console.log(hello()); // undefined

function newHello(name = "guest") { // take "guest" by default. if you don't give any arguments.
     return `Hello, ${name} `
}
// console.log(newHello());
// console.log(newHello("hrx"));


// function calculateCartPrice(num1) {
//      return num1;
// }
// console.log(calculateCartPrice(5));


function calculateCartPrice(...num1) { // rest Operator.
     return num1;
}
// console.log(calculateCartPrice(5, 10, 20, 50));

// function calculateCartPrice(no1, no2, ...num1) { // rest Operator.
//      return num1;
// }
// console.log(calculateCartPrice(5, 10, 20, 50));

const obj1 = {
     userName: "Mark42",
     id: 42
};

// function handleObj1(user) {
//      console.log(`User Name : ${user.userName} and Id : ${user.id}`);
// }
// handleObj1(obj1);

function handleObj2(user) {
     console.log(`User Name : ${user.fullName} and Id : ${user.id}`); //undefined because fullName is not exist 
}
// handleObj2(obj1);

function handleObj3(user) {
     console.log(`User Name : ${user.userName} and Id : ${user.id}`);
}
// handleObj3({ userName: "hrx", id: 12345 });


// const myArr = [10, 20, 30, 40, 50];
// function abc(ar) {
//      console.log(ar[2]);
// }
// abc(myArr);


// function abc(ar) {
//      return ar[1];
// }
// console.log(abc([1, 2, 3, 4, 5]));



