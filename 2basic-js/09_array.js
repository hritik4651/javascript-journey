////////////////////////////////////////////////////////////////////////# Array 

const myArr1 = [2, 4, 6, 8, 10, 12, 14, 16];
const myArr2 = ["IronMan", "Mark42", "Ultron"];
// console.log(myArr1[0]);
// console.log(myArr2[1]);

const myArr3 = new Array(10, 20, 30, 40, 50);

// myArr3.push(60);
// console.log(myArr3);

// myArr3.pop();
// console.log(myArr3);

// myArr3.unshift(5);
// console.log(myArr3);

// myArr3.shift();
// console.log(myArr3);

// console.log(myArr3.includes(30));//checks value in Array.
// console.log(myArr3.indexOf(20));//1

// const newArr = myArr3.join(); // convert into String
// console.log(typeof newArr);// string
// console.log(newArr);

// console.log(`Original : ${myArr3}`);
// const newArr1 = myArr3.slice(2, 4);
// console.log(newArr1);
// console.log(`Original : ${myArr3}`);

// const newArr2 = myArr3.splice(2, 4); // it's perform on real value.
// console.log(newArr2);
// console.log(`Original : ${myArr3}`);






// array.

const marvel = ["ironman1", "ironman2", "ironman3"];
const dc = ["batman", "superman", "aquaman"];

// marvel.push(dc); // it's create array in array.
// console.log(marvel);
// console.log(marvel[3][0]);

const all = marvel.concat(dc); // for concat two arrays. 
// console.log(all);

const all2 = [...marvel, ...dc]; // spread operator.
// console.log(all2);

// const arr1 = [1, 2, 3, [4, 5, 6, 7, [8, 9]]];
// const newArr1 = arr1.flat(Infinity); // make a single array.
// console.log(newArr1);

// console.log(Array.isArray(myArr1)); // check is array or not
// console.log(Array.isArray("ironman")); // not a array
// console.log(Array.from("ironman")); // create array and fill all string character in array.
// console.log(Array.from({ name1: "ironman" })); // give Empty array.

let c1 = 50;
let c2 = 500;
let c3 = 5000;

// console.log(Array.of(c1, c2, c3));// create Array and fill all Values in array.



