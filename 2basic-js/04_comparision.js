////////////////////////////////////////////////////////////////////////# comparision in js.

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//////////////////////////////////////// Don't Use this Always use clean code.

// console.log('2' > 1);// true
// console.log('02' > 1);// true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/*
The reason is that an equality check == and comparision > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 true and (1) null > 0 is false.
*/

// console.log(undefined == 0);//false
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false

//// # strick checks ===

console.log("2" === 2);//false

