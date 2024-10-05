//// DOM

console.log(window.document);
console.log(document.body.childNodes);

/// ##### DOM Manipulation

// Selecting by tag
let heading = document.getElementsByTagName("h1")
console.log(heading);

// Selecting by id
let subHeading = document.getElementById("sub-heading")
console.log(subHeading);

// Selecting by class
let paragraph = document.getElementsByClassName("para")
console.log(paragraph);





// Selecting by Query Selector
let main = document.querySelector("#mainDiv")
console.log(main);

// Selecting by Query Selector all
let box = document.querySelectorAll(".box")
console.log(box);

let contents = document.querySelectorAll("span")
console.log(contents);



/// Properties

//   tagName
let div = document.querySelector("#mainDiv").tagName
console.log(div);

//   innerText
let text = document.querySelector("#mainDiv").innerText
console.log(text);
// text.innerText = "xyz"

//   innerHTML
let htmlDoc = document.querySelector("#mainDiv").innerHTML
console.log(htmlDoc);

//   innerHTML
let htmlDocHide = document.querySelector("#mainDiv").textContent
console.log(htmlDocHide);




let h2 = document.querySelector("h2");
console.log(h2);
h2.innerText = "Hello Javascript";


let content2 = document.querySelectorAll(".box")
console.log(content2[0].innerText = "red");
console.log(content2[1].innerText = "green");
console.log(content2[2].innerText = "dodgerblue");
console.log(content2[3].innerText = "yellow");



/// Attributes

// getAttribute
let att1 = document.querySelector("p")
let clas = att1.getAttribute("class")
console.log(clas);

let att2 = document.querySelector("h2")
console.log(att2.getAttribute("id"));


// setAttribute
let ab = document.querySelector("#mainDiv")
ab.setAttribute("id", "mainCon");

let ac = document.querySelectorAll(".box");
ac.forEach(element => {
     element.setAttribute("class", "boxss")
});


// style
let content = document.querySelectorAll(".boxss")
content[0].style.backgroundColor = "red";
content[1].style.backgroundColor = "yellow";
content[2].style.backgroundColor = "dodgerblue";
content[3].style.backgroundColor = "green";

content.forEach(element => {
     element.style.fontSize = "30px";
});


// create element
let div5 = document.createElement("div");
div5.setAttribute("class", "circle");
let circle = document.querySelector(".content1").appendChild(div5);
console.log(circle);
circle.innerText = "Circle";


// append()
// prepend()
// before()
// after()

// remove()

let rm = document.querySelector("h2");
rm.remove();








let button1 = document.createElement("button");
button1.innerText = "Click";
button1.style.backgroundColor = "red";
button1.style.color = "white";
document.querySelector("body").prepend(button1);


document.querySelector(".para").setAttribute("class", "para p1 p2");



