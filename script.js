const title = document.querySelector("#title");
const color = ["red", "blue", "orange", "yellow"];
function handleOn(event) {
    title.innerHTML = "The Mouse is here!"
    title.style.color = color[0];
}

function handleOut(event) {
    title.innerHTML = "The Mouse is gone!";
    title.style.color = color[1];
}

function handleresize(event) {
    title.innerHTML = "You just resized!"
    title.style.color = color[2];
}

function handleClick(event) {
    title.innerHTML = "That was a right Click!";
    title.style.color = color[3];
}
title.addEventListener("mouseover", handleOn);
title.addEventListener("mouseout", handleOut);
window.addEventListener("resize", handleresize);
title.addEventListener("click", handleClick);