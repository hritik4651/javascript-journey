////////////////////////////////////////////////////////////////////////# arrow function

// this key word

const user = {
     userName: "TonyStark",
     id: "mark42",

     welcome: function () {
          console.log(`Welcome, ${this.userName}`);
          console.log(this);
     }
}
// user.welcome();
// user.userName = "IronMan"
// user.welcome()

// console.log(this); // Empty in Nodejs.


function chai() {
     let userName = "deepak"
     console.log(this);
     console.log(this.userName);
}
// chai()


// arrow function

const newChai = () => {
     let userName = "deepak"
     console.log(this);
     console.log(this.userName);
}
// newChai()


const addOne = (no) => {
     return no + 1
}
// console.log(addOne(2));


// const addTwo = (no1, no2) => no1 + no2
const addTwo = (no1, no2) => (no1 + no2)
// console.log(addTwo(4, 4));


///// when we use { } than we have to use also return keyword

const xyz = () => { return "hello world" }
// console.log(xyz());




const obj = () => ({ id: "mark42" })
// console.log(obj());
// console.log(typeof obj);