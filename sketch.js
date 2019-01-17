
let font;
    fontsize = 80;

function preload(){
    font = loadFont('assets/Angelow.otf');
}

function setup(){
    createCanvas(900, 400);
    background(160);
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER,CENTER);

}

x1 = 15; 
x2 = 885;
f = 25;

function draw(){

// small gradient circles
    fill(f);
    ellipse(x1,40,20,20); 

    fill(f);
    ellipse(x2,360,20,20);
    
// central circles
    fill(210);
    ellipse(265,200,300,300);

    fill(140);
    ellipse(555,200,170,170);

    fill(80);
    ellipse(730,200,80,80);

       

   textAlign(RIGHT);
   fill(65);
   drawWords(width * 0.25);
   
   textAlign(CENTER);
   fill(120);
   drawWords(width * 0.5);

   textAlign(LEFT);
   fill(190);
   drawWords(width * 0.75);

    x1 = x1+25;
    x2 = x2-25;
    f = f+10;

}

function drawWords(x){
    
    text('hello',x,150);

    text('world',x,220);
}
    
    
//    fill(100, 60, 35);
  //  rect(300, 300, 100, 100);
    //fill(0, 0, 255);
    //ellipse(100, 100, 30, 80);
    //fill(250, 250, 250);
    //ellipse(300, 300, 50, 50);
    //fill(250, 250, 250);
    //ellipse(400, 300, 50, 50);
    //fill(165, 42, 42);
    //ellipse(307, 307, 30, 30);
    //fill(165, 42, 42);
    //ellipse(393, 307, 30, 30);

