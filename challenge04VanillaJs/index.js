
const clockContainer = document.querySelector(".time-box"),
    clock = clockContainer.querySelector("h1");



function getTime() {
    const now = new Date();
    const xmas_day = new Date("2021-12-24:00:00:00+0900");
    const gap = xmas_day - now;
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (60 * 1000 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    clock.innerText = `${day < 10 ? `0${day}d` : day}d ${hours < 10 ? `0${hours}h` : hours}h ${minutes < 10 ? `0${minutes}m` : minutes}m ${seconds < 10 ? `0${seconds}s` : seconds}s`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();