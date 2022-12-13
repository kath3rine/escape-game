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
        hideAll();
        prompt.innerHTML = 'You cannot open the window because it is too icy';
        scene.src = 'assets/windowice.png';
        ctn.style.left = '700px';
        ctn.innerHTML = 'Go back';
        ctn.onclick = function() {
            window.location.href = 'level4.html'
        }
    } else {
        scene.src = 'assets/window.png';
        prompt.innerHTML = 'Congrats, you found the exit!';
        hideAll();
        ctn.style.left = '700px'
        ctn.innerHTML = 'Continue';
        ctn.onclick = function() {
            window.location.href = 'escape.html';
        }
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
            if (canOpenWindow) {
                scene.src = 'assets/showeron.png'
            } else {
                scene.src = 'assets/showeronice.png'
            }
            
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
    // turn on hairdryer
    ctn.innerHTML = 'Turn on';
    ctn.onclick = function() {
        canOpenWindow = true;
        scene.src = 'assets/hairdryeron.png'
        prompt.innerHTML = ''
        ctn.innerHTML = 'Continue'
        // back to home screen
        ctn.onclick = function() { 
            restart4()
            b1.onclick = function() { b1clicked()}
        }
    }
}

// home page of level 4
function restart4() {
    ctn.innerHTML = 'Continue';
    b1.innerHTML = 'Open the window';
    b2.innerHTML = 'Turn on Shower';
    b1.style.visibility = 'visible';
    b2.style.visibility = 'visible';
    b3.style.visibility = 'visible';
    ctn.style.visibility = 'hidden';
    prompt.innerHTML = 'Almost there! You have reached the bathroom. What do you do?'
}

/* functions for changing visibility */
function hideAll() {
    b1.style.visibility = 'hidden';
    b2.style.visibility = 'hidden';
    b3.style.visibility = 'hidden';
    ctn.style.visibility = 'visible';
}

