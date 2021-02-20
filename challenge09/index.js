const valueNum = document.querySelector(".valueNum"),
    rangeForm = document.querySelector(".rangeForm"),
    range = rangeForm.querySelector("input"),
    rangeTitle = rangeForm.querySelector(".valueNum"),
    inputNumForm = document.querySelector(".inputNumForm"),
    inputNum = inputNumForm.querySelector("input"),
    divGuess = document.querySelector(".divGuess"),
    result = document.querySelector("result");

const btnplay = document.createElement("button");
const span = document.createElement("h4"),
    h2 = document.createElement("h2");
let randNum, num, rangeNum;

btnplay.innerHTML = "PLAY";
inputNumForm.append(btnplay);


function callRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function showValueNum() {
    rangeNum = range.value;
    divGuess.classList.add("divGueShowing");
    rangeTitle.innerText = `Generate a number 0 and ${rangeNum}`;

}
function winLose(userNum, comNum) {
    console.log(userNum, comNum)
    if (parseInt(userNum) !== parseInt(comNum)) {
        h2.innerText = `you lost`;
    } else {
        h2.innerText = `you win`;
    }
    document.body.appendChild(h2);
}
function handleSubmit(e) {
    e.preventDefault();
    num = inputNum.value;
    btnplay.addEventListener("click", playGame);
}
function init() {
    rangeForm.addEventListener("change", showValueNum);
    inputNumForm.addEventListener("click", handleSubmit);
}
function playGame() {
    randNum = callRandomNumber(rangeNum);
    if (num !== null) {
        span.innerHTML = `You chose:${num},the machine chose:${randNum}`;
        document.body.appendChild(span);
        winLose(num, randNum);
    }
}

init();