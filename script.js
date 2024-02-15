const typer = document.querySelector('.typing');
const text1 = 'A aspiring front-end dev';
const text2 = 'A linux entusiast';
const text3 = 'Open source contributor';
function typingEffect(element, text1, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text1[i];
    if (i === text1.length - 1) {
        return;
    }
    setTimeout(() => typingEffect(typer, text1, i + 1), 30);
    if (element.textContent = "A aspiring front-end dev") {
        setTimeout(() => eraserEffect, 30);
    }
    // setTimeout(() => typingEffect(typer, text2, i + 1), 30)
}
typingEffect(typer, text1, 0);
function eraserEffect() {
    textContent.slice(0, -1);
}
