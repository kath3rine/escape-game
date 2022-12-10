const scene1 = document.getElementById("scene1");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn2");

/* OPTION 1: death */
function b1clicked() {
    hideAll();
    prompt.innerHTML = 'Uh oh, there is a ghost behind the door';
    scene2.src = 'assets/door1.png'; 
    ctn.onclick = function() {
        window.location.href = 'death.html'
    };
}

/* OPTION 2: death */
function b2clicked() {
    hideAll();
    prompt.innerHTML = 'Uh oh, there is a ghost behind the door';
    scene2.src = 'assets/door2.png'; 
    ctn.onclick = function() {
        window.location.href = 'death.html'
    };
}

/* OPTION 3: level 3 */
function b3clicked() {
    hideAll();
    prompt.innerHTML = 'Yay, you picked the correct door';
    scene2.src = 'assets/door3.png'; 
    ctn.onclick = function() {
        window.location.href = 'level3.html'
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