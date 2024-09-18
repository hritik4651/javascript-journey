//// Loops

/// ##### for loop
for (let index = 0; index < 10; index++) {
     console.log('for = ', index + 1);
}

/// ##### while loop
let i = 1
while (i <= 5) {
     console.log('while = ', i);
     i++
}

/// ##### do while loop
let j = 1
do {
     console.log('do-while = ', j);
     j++
} while (j <= 5);






/// ##### for of loop
const str = "Toney stark"
for (const key of str) {
     console.log(key);
}


/// ##### for in loop
const obj1 = {
     fName: "Mark",
     id: "mark42",
     isAdmin: true
}
for (const key in obj1) {
     console.log(key);
     console.log(obj1[key]);
}





for (let index = 1; index <= 100; index++) {
     if (index % 2 == 0) {
          console.log(index);
     }
}