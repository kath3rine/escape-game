const scene = document.getElementById("scene4");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn4");
var canOpenWindow = false;

/* OPTION 1: open window */
function b1clicked() {
    if (canOpenWindow == false) {
        cantOpen();
    } else {
        canOpen();
    }
}

/* OPTION 2: shower */
function b2clicked() {
    b3.style.visibility = 'hidden';
    prompt.innerHTML = 'What temperature should the water be?';
    b1.innerHTML = 'Cold';
    b2.innerHTML = 'Hot';

    // cold
    b1.onclick = function() {
        scene.src = 'assets/showeronice.png' 
        hideAll()
        prompt.innerHTML = ''
        ctn.onclick = function() {
            // back to home screen
            scene.src = 'assets/showeronice.png'
            restart4()
            b1.onclick = function() { b1clicked()}
        }
    }
    
    // hot 
    b2.onclick = function() {
        scene.src = 'assets/showeron.png'
        canOpenWindow = true
        hideAll()
        prompt.innerHTML = ''
        ctn.onclick = function() { 
            // back to home screen
            scene.src = 'assets/showeron.png'
            restart4()
            // open window
            b1.onclick = function() { b1clicked()}
        };
    }
}

/* OPTION 3: open drawer */
function b3clicked() {
    hideAll();
    scene.src = 'assets/hairdryer.png';
    prompt.innerHTML = 'There is a hairdryer in there!';
    ctn.innerHTML = 'Turn on';
    ctn.onclick = function() {
        scene.src = 'assets/hairdryeron.png'
        prompt.innerHTML = 'Open the window!'
        ctn.innerHTML = 'Continue'
        ctn.onclick = function() { windowScene()}
    }
}

// ice on window -> cannot open
function cantOpen() {
    hideAll();
    prompt.innerHTML = 'You cannot open the window because it is too icy';
    scene.src = 'assets/windowice.png';
    ctn.style.left = '700px';
    ctn.innerHTML = 'Go back';
    ctn.onclick = function() {
        window.location.href = 'level4.html'
    }
}

// open window
function canOpen() {
    scene.src = 'assets/window.png';
    prompt.innerHTML = 'Congrats, you found the exit!';
    hideAll();
    ctn.style.left = '700px'
    ctn.innerHTML = 'Continue';
    ctn.onclick = function() {
        window.location.href = 'escape.html';
    }
}

// home page of level 4
function restart4() {
    ctn.innerHTML = 'Continue';
    b1.innerHTML = 'Open the window';
    b2.innerHTML = 'Turn on Shower';
    showAll();
    prompt.innerHTML = 'You wake up in a haunted house and your goal is to escape. What do you want to do?'
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
