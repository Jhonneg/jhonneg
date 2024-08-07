const typer = document.querySelector(".typing");
const text = [
  "A aspiring webdev",
  "A linux enthusiast",
  "A aspiring 3D artist",
  "Front-end enjoyer",
];
let n = 0;
function generateNumber() {
  n = Math.floor(Math.random() * text.length);
  return n;
}
function typingEffect(element: any, text: string[], i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[n][i];
  if (i === text[n].length - 1) {
    setTimeout(() => generateNumber(), 1000);
    setTimeout(() => typingEffect(typer, text), 3000);
    return;
  }
  setTimeout(() => typingEffect(typer, text, i + 1), 50);
}
typingEffect(typer, text);
