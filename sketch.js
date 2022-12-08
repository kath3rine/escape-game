const img = document.getElementById("img");
const prompt = document.getElementById("prompt");
const output = document.getElementById("output");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");


b1.onclick = function() {yesClicked()};
b2.onclick = function() {noClicked()};

function yesClicked() {
    img.src = "assets/example2.png";
    output.innerHTML = "oops you died :(";
}

function noClicked() {
    img.src = "assets/example3.png";
    output.innerHTML = "yay you lived :)";
}