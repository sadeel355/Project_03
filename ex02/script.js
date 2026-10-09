const title = document.getElementById("title");
const box = document.getElementById("box");
const message = document.querySelector(".message");

title.textContent = "Welcome to the Live DOM Tree!";
message.textContent = "The page has been changed using JavaScript.";

box.textContent = "The box is now active.";
box.style.border = "2px solid black";
box.style.padding = "30px";

box.classList.add("active");
