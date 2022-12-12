const scene = document.getElementById("scene2");
const prompt = document.getElementById("prompt");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const ctn = document.getElementById("ctn2");

/* OPTION 1: death */

function db1clicked() {
    prompt.innerHTML = 'Uh oh, there is a ghost behind the door';
    prompt.style.height = '500px';
    scene.src = 'assets/door1.png'
    ctn.style.visibility = 'visible'
    ctn.onclick = function() {
        window.location.href = 'death.html'
    }
}

/* OPTION 2: death */
function db2clicked() {
    prompt.innerHTML = 'Uh oh, there is a ghost behind the door';
    scene.src = 'assets/door2.png'
    ctn.style.visibility = 'visible'
    ctn.onclick = function() {
        window.location.href = 'death.html'
    }
}



/* OPTION 3: level 3 */
function db3clicked() {
    prompt.innerHTML = 'Yay, you picked the correct door';
    scene.src = 'assets/door3.png'; 
    ctn.style.visibility = 'visible'
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
