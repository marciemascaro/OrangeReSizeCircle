var ReSizeCircle = [5, 20, 35, 50, 75];
var i = 0;


function setup() {
  createCanvas(720, 360);
}

function draw(){
  
}

function mousePressed(){
  
    noStroke();
    fill(255, random(100,195), 0);
    ellipse(mouseX, mouseY, ReSizeCircle[i], ReSizeCircle[i]);  
    console.log(ReSizeCircle[i]);
    
    if (i < 4){
    i= i+1;
    }else{
      i=0;
    }

}
