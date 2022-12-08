const here = document.getElementById("here");
const is = document.getElementById("is");
const some = document.getElementById("some");
const random = document.getElementById("random");
const javascript = document.getElementById("javascript");
const interactivity = document.getElementById("interactivity");

function red() {
  here.style.color = "red";
}

function bold() {
  is.style.fontWeight = "bold";
}

function big() {
  some.style.fontSize = "30px";
}

function underline() {
  random.style.textDecoration = "underline";
}

function background() {
  javascript.style.backgroundColor = "purple";
}

function italic() {
  interactivity.style.fontStyle = "italic";
}

here.onclick = red;
is.addEventListener("mouseover", bold);
some.onmousedown = big;
random.addEventListener("mouseleave", underline);
javascript.onmouseup = background;
interactivity.addEventListener("mouseup", italic);

