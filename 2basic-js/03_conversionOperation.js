////////////////////////////////////////////////////////////////////////# conversion in js.

let num = 24;
let str = "stark";
let isLogIn = true;

// console.log(typeof num);
// console.log(typeof (str));
// console.log(typeof (isLogIn));

///////////////////////////////////////////////// number conversion
// num = 25;
// num = "25";
// num = "24cc";
// num = "mark";
// num = true;
// num = false;

// "25" => 25
// 24cc => NaN
// "mark" => NaN
// true => 1
// false => 0

// let intoNum = Number(num);
// console.log(typeof intoNum);
// console.log(intoNum);


///////////////////////////////////////////////// boolean conversion
// isLogIn = true;
// isLogIn = false;
// isLogIn = "";
// isLogIn = "hrx";
// isLogIn = 1;
// isLogIn = 0;
// isLogIn = 34;

// "" => false
// "hrx" => true
// 1 => true
// 0 => false
// 34 => true

// let intoBool = Boolean(isLogIn);
// console.log(typeof intoBool);
// console.log(intoBool);


///////////////////////////////////////////////// string conversion
// str = "mark";
// str = 42;

// 42 => "42"

// let intoStr = String(str);
// console.log(typeof intoStr);
// console.log(intoStr);








//************************************* Operations *************************************

// let value = 4;
// let negValue = -value; // Unary Negation (-)
// console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 1);
// console.log(2 * 3);
// console.log(8 / 2);
// console.log(2 ** 3);
// console.log(2 % 2);

// let str1 = "hello";
// let str2 = " javaScript";

// let str3 = str1 + str2; // Concat two Strings.
// console.log(str3);

// console.log('1' + 2); // 12
// console.log(1 + '2'); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32


// console.log((3 + 4) * 5 / 3);

//// kind of number conversion 
// console.log(+true); // 1
// console.log(+""); // 0
// console.log(+'15'); // unary plus operator


// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

let p = 2;
const q = p++;
console.log(`p = ${p} , q = ${q}`);//p = 3, q = 2

let i = 4;
const j = ++i;
console.log(`i = ${i} , j = ${j}`); // i = 5, j = 5


