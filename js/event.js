//// Event


let event1 = document.querySelector("button");
event1.onclick = (e) => {
     console.log('hello');
     console.log(e.type);
};

event1.ondblclick = (e) => {
     console.log(e.type);

};

event1.onmouseover = (e) => {
     console.log(e.type);
};


// event listeners

// addEventListener
event1.addEventListener("click", (e) => {
     console.log('javaScript-Event');
     console.log('typeeeeeeeeeeee: ', e.type);
})

let e1 = () => {
     console.log("HELLOoooooo!!!!");
}

event1.addEventListener("click", e1)


// removeEventListener
event1.removeEventListener("click", e1)






let body = document.querySelector("body");
let currentMode = "light"
event1.addEventListener("click", (e) => {
     if (currentMode === "light") {
          currentMode = "dark";
          body.style.backgroundColor = "grey";
     } else {
          currentMode = "light"
          body.style.backgroundColor = "white";
     }
})

