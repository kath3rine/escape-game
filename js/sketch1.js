const scene = document.getElementById("scene1");
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
        prompt.innerHTML = 'You wake up in a haunted house and your goal is to escape. What do you want to do?'
    }
}

/* OPTION 2: move the blanket */
function b2clicked() {
    hideAll();
    scene.src = 'assets/guestdrawer.png';
    prompt.innerHTML = 'There is a dresser under there!';
    ctn.innerHTML = 'Look inside';
    ctn.onclick = function() {
        scene.src = 'assets/keyindrawer.png'
        prompt.innerHTML = 'Congrats, you found the key!'
        ctn.innerHTML = 'Continue'
        ctn.onclick = function() {
            window.location.href = 'level2.html'
        }
    }
}

/* OPTION 3: look under bed */
function b3clicked() {
    hideAll();
    prompt.innerHTML = 'Uh oh, there is a ghost under the bed';
    scene.src = 'assets/ghostunderbed.png'; 
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

