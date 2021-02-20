const title = document.querySelector("#title");

function handleMouseOn() {
    title.innerHTML = "The mouse is here!";
    title.style.color = "red";
}
function handleResize() {
    title.innerHTML = "you just resize!";
    title.style.color = "green";
}
function handleMouseOut() {
    title.innerHTML = "The mouse is gone";
    title.style.color = "yellow";
}
function handleClick() {
    title.innerHTML = "That was mouse right a click";
    title.style.color = "gold";
}
window.addEventListener("mouseover", handleMouseOn);
window.addEventListener("resize", handleResize);
window.addEventListener("mouseout", handleMouseOut);
window.addEventListener("click", handleClick);
