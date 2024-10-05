////////////////////////////////////////////////////////////////////////# scope

// let a = 100; //global scope.
// const b = 20;
// var c = 30;

var c = 500;

if (true) {
     let a = 10; // local scope.
     const b = 20;
     var c = 300;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
     const userName = "stark";

     function two() {
          const website = "chai aur code";
          console.log(`inner : ${userName}`);
     }
     // console.log(website); // website is not defined.
     two();

}
// one();


// if (true) {
//      const userName = "deepak";
//      if (userName === "deepak") {
//           const website = "insta";
//           console.log(userName + website);
//      }
//      // console.log(website);// website is not defined
// }
// // console.log(userName);// userName is not defined.


// console.log(addOne(4));

function addOne(no) {
     return no + 1;
}
// console.log(addOne(4));

// ++++++++++++++++++++ hoisting

// console.log(addTwo(2)); //Cannot access 'addTwo' before initialization
const addTwo = function (no) {
     return no + 2;
}
// console.log(addTwo(2));