////////////////////////////////////////////////////////////////////////# Date

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 8);
// let myCreatedDate = new Date("2024-01-15");
// let myCreatedDate = new Date("01-16-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
// console.log(newDate.getDate());

let dat = newDate.toLocaleString('default', {
     weekday: "long",
     month: "long"
})
// console.log(dat);
