const body = document.body;
const BIG_SCREEN = "big";
const MEDIUM_SCREEN = "medium";
const SMALL_SCREEN = "small";


function handleResize() {
    const currentWidth = window.innerWidth;
    if (currentWidth > 1000) {
        body.classList.add(BIG_SCREEN);
        body.classList.remove(MEDIUM_SCREEN);
    }
    else if (currentWidth < 1000 && currentWidth >= 600) {
        body.classList.add(MEDIUM_SCREEN);
        body.classList.remove(SMALL_SCREEN, BIG_SCREEN);
    }
    else {
        body.classList.add(SMALL_SCREEN);
        body.classList.remove(MEDIUM_SCREEN);
    }
}


window.addEventListener("resize", handleResize);




