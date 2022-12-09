const scene1 = document.getElementById("scene1");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn1");

/* OPTION 1: open the door */
function b1clicked() {
    hideAll();
    ctn.innerHTML = 'Go Back'
    prompt.innerHTML = 'You cannot open the door because you do not have the key';
    ctn.onclick = function() {
        ctn.innerHTML = 'Continue'
        showAll()
        prompt.innerHTML = 'You wake up in a haunted house and your goal is to escape. First, you need to find the key to leave the guest bedroom. What do you want to do?'
    }
}

/* OPTION 2: move the blanket */
function b2clicked() {
    hideAll();
    scene1.src = 'level1/guestdrawer.png';
    ctn.innerHTML = 'Look inside';
    prompt.innerHTML = 'There is a dresser under there!';
}

/* OPTION 3: look under bed */
function b3clicked() {
    hideAll();
    prompt.innerHTML = 'Uh oh, there is a ghost under the bed';
    scene1.src = 'level1/guestdrawer.png'; /* replace w/ ghost under bed */
    ctn.onclick = function() {
        window.location.href = 'death.html'
    };
}

/* functions for changing visibility */
function hideAll() {
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'hidden';
    b3.style.visibility = 'hidden';
    ctn.style.visibility = 'visible';
}

function showAll() {
    b1.style.visibility = 'visible';
    b2.style.visibility = 'visible';
    b3.style.visibility = 'visible';
    ctn.style.visibility = 'hidden';
}

