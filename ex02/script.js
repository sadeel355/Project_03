const title = document.getElementById("title");
const message = document.querySelector(".message");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    title.textContent = "Welcome!";
    message.textContent = "The page has changed!";
    title.style.color = "blue";
    message.classList.add("active");
});
