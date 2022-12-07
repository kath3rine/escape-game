 function swapImage(){
  if (document.getElementById("pic").src.endsWith('example.png') == true)  { 
       document.getElementById("pic").src = "assets/example3.png"; //assignment  
   } else if (document.getElementById("pic").src.endsWith('example3.png') == true) { 
      document.getElementById("pic").src = "assets/example.png"; 
  }
} 

let img; 

 function setup() {
    createCanvas(800, 800);
  }
  function draw() {
     if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }