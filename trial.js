let text = document.createElement("p")
text.textContent = "Hey I'm red"
text.style.color = "red"

let header = document.createElement("h3")
header.style.color = "blue"
header.textContent = "I'm a blue h3"

let childHead = document.createElement("h1")
let childText = document.createElement("p")
childHead.textContent = "I'm a div"
childText.textContent = "Me Too"

let childDiv = document.createElement("div")
childDiv.style["background-color"] = 'pink'
childDiv.style["border-color"] = "black"

childDiv.appendChild(childHead)
childDiv.appendChild(childText)

let main = document.querySelector('.main')
main.appendChild(text);
main.appendChild(header)
main.appendChild(childDiv);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// the JavaScript file
const btntwo = document.querySelector("#btntwo");
btntwo.addEventListener("click", () => {
  alert("Hello World");
});

