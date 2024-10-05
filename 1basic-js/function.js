//// Functions

function myFunction1() {
     console.log("this is function.!");
}
myFunction1();

function myFunction2(str) { //parameter
     console.log(str);
}
myFunction2("message..!") //argument

function sum(x, y) {
     return x + y;
}
console.log(`Sum is ${sum(5, 3)}`);



/// ##### arrow Function
let sum1 = (x, y) => {
     console.log(x + y);
}
sum1(10, 5);




function check(str1) {
     const vowels = "aioueAIOUE";
     let count = 0;
     for (const key of str1) {
          for (const val of vowels) {
               if (key === val) {
                    count++
               }
          }
     }
     console.log(`Number of vowels = ${count}`);
}
check("Toney Stark");

let checkVowels = (str2) => {
     const vowels = "aioueAIOUE";
     let count = 0;
     for (const key of str2) {
          for (const val of vowels) {
               if (key === val) {
                    count++
               }
          }
     }
     console.log(`Number of vowels = ${count}`);
}
checkVowels("Toney");




/// ##### forEach loop in array

const arr5 = ["red", "blue", "dodgerblue", "grey"];

arr5.forEach((key) => {
     console.log(key.toUpperCase());
})

const arr6 = [2, 4, 6, 8];
arr6.forEach((val) => {
     console.log(val ** 2);
})


/// ##### map in array

const arr7 = [1, 2, 3, 4, 5];
let newArr = arr7.map((val) => {
     return val ** 2;
})
console.log(newArr);


/// ##### filter in array

const arr8 = [3, 6, 9, 12, 15];
let newArr1 = arr8.filter((val) => {
     return val % 2 == 0;
})
console.log(newArr1);


/// ##### reduce in array

const arr9 = [4, 3, 2, 1, 5];
let sum2 = arr9.reduce((result, curr) => {
     console.log(`${result} ${curr}`);
     return result + curr;
}, 0)
console.log(sum2);







{
     const array1 = [92, 53, 98, 95, 94, 9];
     const above90 = array1.filter((val) => {
          return 90 < val;
     })
     console.log(above90);
}

{
     let no = 5;
     let array = [];
     for (let i = 0; i < no; i++) {
          array.push(i + 1);
     }
     console.log(array);

     let sum = array.reduce((res, curr) => {
          return res + curr;
     }, 0)
     console.log(sum);

     let product = array.reduce((res, curr) => {
          return res * curr;
     }, 1)
     console.log(product);
}