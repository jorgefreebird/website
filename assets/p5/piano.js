
let A, S, D, F, H, J, K, L;
let ts;
let tf;
let myFont;
var x = (windowWidth - width) / 2;

var cnv;

function preload(){
  A = loadSound('../assets/sounds/B01.mp3');
  S = loadSound('../assets/sounds/B02.mp3');
  D = loadSound('../assets/sounds/B03.mp3');
  F = loadSound('../assets/sounds/B04.mp3');
  H = loadSound('../assets/sounds/B05.mp3');
  J = loadSound('../assets/sounds/B06.mp3');
  K = loadSound('../assets/sounds/B07.mp3');
  L = loadSound('../assets/sounds/B09.mp3');

  myFont = loadFont('../assets/fonts/SpaceMono-Regular.ttf');

}

function centerCanvas() {
    x = (windowWidth - width) / 2;
    cnv.position(x);
  }

function setup() {
    cnv = createCanvas(700, 500);
    centerCanvas();
    ts = 15
    y= 1650;
    tf = color (30,30,30);
    textFont(myFont);

    cnv.position(x, y);

}

function windowResized() {
    centerCanvas();
  }

function draw() {
  background(242,242,242);

  textAlign(CENTER, CENTER);

  //buttons
  //top
 
  noStroke();
  fill (174,214,192);
  rect(130,180,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'a') || (key == 'A')) {
      textSize(ts);
      fill (tf);
      text(key, 130, 180, 110, 100);
      fill (0);
      textSize(15);
      text("INTERACTION DESIGN", 164,100, 376, 21,);     
    }
      }

  noStroke();
  fill (237,145,90);
  rect(245,180,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 's') || (key == 'S')) {
      textSize(ts);
      fill (tf);
      text(key, 245, 180, 110, 100);
      fill (0);
      textSize(15);
      text("VIDEO GAMES", 164,100, 376, 21,); 

    }
      }
  
  noStroke();
  fill (90,122,237);
  rect(360,180,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'd') || (key == 'D')) {
      textSize(ts);
      fill (tf);
      text(key, 360, 180, 110, 100);
      fill (0);
      textSize(15);
      text("DIGITAL ANIMATION", 164,100, 376, 21,); 
    }
      }

  noStroke();
  fill (214,236,128);
  rect(475,180,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'f') || (key == 'F')) {
      textSize(ts);
      fill (tf);
      text(key, 475, 180, 110, 100);
      fill (0);
      textSize(15);
      text("WEB DESIGN", 164,100, 376, 21,); 
    }
      }
   
  //bottom 
  
  noStroke();
  fill (208,220,243);
  rect(130,297,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'h') || (key == 'H')) {
      textSize(ts);
      fill (tf);
      text(key, 130, 297, 110, 100);
      fill (0);
      textSize(15);
      text("VIRTUAL AND AUGMENTED REALITY", 164,100, 376, 21,); 
        }
      }

  noStroke();
  fill (237,205,90);
  rect(245,297,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'j') || (key == 'J')) {
      textSize(ts);
      fill (tf);
      text(key, 245, 297, 110, 100);
      fill (0);
      textSize(15);
      text("UBIQUITOUS COMPUTING", 164,100, 376, 21,); 
         }
    }
    
  noStroke();
  fill (237,90,116);
  rect(360,297,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'k') || (key == 'K')) {
      textSize(ts);
      fill (tf);
      text(key, 360, 297, 110, 100);
      fill (0);
      textSize(15);
      text("USER INTERFACES DESIGN", 164,100, 376, 21,); 
           }
    }

  noStroke();
  fill (239,196,222);
  rect(475,297,100,100,5,5,5,5);

  if (keyIsPressed) {
    if ((key == 'l') || (key == 'L')) {
      textSize(ts);
      fill (tf);
      text(key, 475, 297, 110, 100);
      fill (0);
      textSize(15);
      text("USER EXPERIENCE & RESEARCH", 164,100, 376, 21,); 
       }
    }

//text bottom 

    noStroke();
    fill (191,191,191);
    rect(164,426,376,21);
    fill (0);
    textSize(10);
    text("PRESS key 'A,S,D,F,H,J,K or L' and turn on the volume", 164,424, 376, 21,); 

}

function keyTyped() {
  if((key == 'a') || (key == 'A')){
    A.play();  
  }
  if((key == 's')|| (key == 'S')){
    S.play();
  }
  if((key == 'd')|| (key == 'D')){
    D.play();
  }
  if((key == 'f') || (key == 'F')){
    F.play();
  }
  if((key == 'h') || (key == 'H')){
    H.play();
  }
  if((key == 'j') || (key == 'J')){
    J.play();
  }
  if((key == 'k') || (key == 'K')){
    K.play();
  }
  if((key == 'l') || (key == 'L')){
    L.play();
  }
    }
