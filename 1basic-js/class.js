//// __proto__


const obj1 = {
     fName: "mark",
     id: "m42",
     display: () => {
          console.log(`Name : ${this.fName}`);
     }
}
const obj2 = {
     age: "42",
     show: () => {
          console.log(`Age: ${this.age}`);
     }
}
obj2.__proto__ = obj1;

console.log(obj2.display());



//// class

class parent {
     constructor() {
          console.log('initialized !');
     }
     display = () => {
          console.log('Hello u are in Parent class');
     }
     dis() {
          console.log('heyy');
     }
}
class child extends parent { // inherit class parent
     constructor() {
          super(); // to invoke parent class constructor.
          console.log('initialized again!');
     }
     show = () => {
          super.dis(); // to call parent class method.
          // display();
          console.log('hey u r in child class !');
     }
}


let family = new child();

console.log(family.display());
console.log(family.show());





/////////////

let data = "Secret information";

class User {
     constructor(name, email) {
          this.name = name;
          this.email = email;
     }
     viewData() {
          console.log(data);
          console.log(`Name : ${this.name} Email : ${this.email}`);
     }
}
class Admin extends User {
     constructor(name, email) {
          super(name, email);
     }
     editData() {
          data = "new";
          console.log(data);
     }
}
const s1 = new User("mark", "mark42@xyz.com");
const s2 = new User("toney", "toney42@xyz.com");

console.log(s1);
console.log(s2);
console.log(s2.viewData());


const admin = new Admin("iron", "iron@xyz.com")
console.log(admin.editData());






//// try catch

try {
     const a = 10;
     const b = 20;
     console.log(a);
     console.log(b);
     console.log(c);
     console.log(a);
     console.log(b);

} catch (error) {
     console.log(error);
}