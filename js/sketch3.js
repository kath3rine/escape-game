const scene = document.getElementById("scene3");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn3");
var hasKey = false;
var fakeKey = false;

/* OPTION 1: bathroom door */
function b1clicked() {
    if (hasKey == false && fakeKey == false) { // no key
        hideAll();
        prompt.innerHTML = 'You cannot open the door because you do not have the key';
        ctn.innerHTML = 'Go Back';
        ctn.onclick = function() { restart3() };
    } else if (hasKey == true) { // key
        hideAll();
        prompt.innerHTML = 'Congrats, you can go to the bathroom';
        scene.src = 'assets/masterdooropen.png'; // change this asset
        ctn.onclick = function() {
            window.location.href = 'level4.html'
        }
    } else if (hasKey == false && fakeKey == true) { // fake key
        hideAll();
        prompt.innerHTML = 'You cannot open the door because the key you have is fake.';
        ctn.innerHTML = 'Go Back';
        ctn.onclick = function() {restart3()}
    }
}

/* OPTION 2: desk */
function b2clicked() {
    hideAll();
    prompt.innerHTML = 'A ghost has left a message for you...';
    // look behind painting
    scene.src = 'assets/checkpainting.png'; 
    ctn.onclick = function() {
        scene.src = 'assets/paintingkey.png'
        prompt.innerHTML = 'You found a key!'
        fakeKey = true;
        ctn.onclick = function() {restart3()}
    };
}

/* OPTION 3: pillow */
function b3clicked() {
    hideAll();
    scene.src = 'assets/pillowkey.png'; 
    prompt.innerHTML = 'You found a key!';
    
    hasKey = true;
    // back to home page
    ctn.innerHTML = 'Continue';
    ctn.onclick = function() { restart3()   }
}

/* restart */
function restart3() {
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
