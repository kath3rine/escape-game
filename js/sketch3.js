const scene = document.getElementById("scene3");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn3");

/* OPTION 1: bathroom door */
function b1clicked() {
    hideAll();
    ctn.innerHTML = 'Go Back'
    prompt.innerHTML = 'You cannot open the door because you do not have the key';
    ctn.onclick = function() { restart() };
}

/* OPTION 2: desk */
function b2clicked() {
    hideAll();
    prompt.innerHTML = 'A ghost has left a message for you...';
    ctn.innerHTML = 'Check behind the painting';
    scene.src = 'assets/checkpainting.png'; 
    ctn.onclick = function() {
        scene.src = 'assets/paintingkey.png'
        prompt.innerHTML = 'You found a key!'
        ctn.innerHTML = 'Open the door'
        ctn.onclick = function() {
            prompt.innerHTML = 'Oh no, the key you found was fake...'
            ctn.innerHTML = 'Go back'
            ctn.onclick = function() { restart()};
        }
    };
}

/* OPTION 3: pillow */
function b3clicked() {
    hideAll();
    prompt.innerHTML = 'You found a key!';
    ctn.innerHTML = 'Open the door'
    scene.src = 'assets/pillowkey.png'; 
    ctn.onclick = function() {
        window.location.href = "level4.html"
    }
}

/* restart */
function restart() {
    prompt.innerHTML = 'You have reached the master bedroom. Where do you want to look?'
    b1.style.visibility = 'visible';
    b2.style.visibility = 'visible';
    b3.style.visibility = 'visible';
    ctn.style.visibility = 'hidden';
    scene.src = 'assets/masterroom.png';
    ctn.innerHTML = 'Continue';
}

/* functions for changing visibility */
function hideAll() {
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'hidden';
    b3.style.visibility = 'hidden';
    ctn.style.visibility = 'visible';
}
