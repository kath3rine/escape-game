const scene = document.getElementById("scene4");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn4");

/* OPTION 1: open window */
function b1clicked() {
    iceScene();
}

/* OPTION 2: shower */
function b2clicked() {
    b3.style.visibility = 'hidden';
    prompt.innerHTML = 'What temperature should the water be?';
    b1.innerHTML = 'Cold';
    b2.innerHTML = 'Hot';

    // cold
    b1.onclick = function() {
        scene.src = 'assets/showeron.png' // add asset w/ ice on window
        hideAll()
        prompt.innerHTML = 'Open the window!'
        ctn.onclick = function() {iceScene()}
    }
    
    // hot 
    b2.onclick = function() {
        scene.src = 'assets/showeron.png'
        hideAll();
        prompt.innerHTML = 'Open the window!'
        ctn.onclick = function() { windowScene()}
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

// ice on window
function iceScene() {
    hideAll();
    prompt.innerHTML = 'You cannot open the window because it is too icy';
    // add asset of icy window?
    ctn.style.left = '700px'
    ctn.innerHTML = 'Go back';
    ctn.onclick = function() {
        window.location.href = 'level4.html'
    }
}

function windowScene() {
    scene.src = 'assets/window.png';
    prompt.innerHTML = 'Congrats, you found the exit!';
    ctn.style.left = '700px'
    ctn.innerHTML = 'Continue';
    ctn.onclick = function() {
        window.location.href = 'escape.html';
    }
}

/* functions for changing visibility */
function hideAll() {
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'hidden';
    b3.style.visibility = 'hidden';
    ctn.style.visibility = 'visible';
}
