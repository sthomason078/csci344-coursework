const changeElement = (color, selector) => {
    let bodyEl = document.querySelector(selector);
    bodyEl.style.backgroundColor = color;
    bodyEl.style.fontSize = Math.random() * 8 + 12 + "px";
}

const resetElements = () => {
    let elements = document.querySelectorAll("*");
    for (const element of elements) {
        element.removeAttribute("style");
    }
}