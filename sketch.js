function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill("pink");
  textSize(24);
  textStyle("bold");
  text("Tick - Tock Clock :Enjoy!!", 75,400); 
  

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("red");
  noFill();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke("red");
  var mnangle = map(mn,0,60,0,360);
  arc(0,0,320,320,0,mnangle);

  stroke("green");
  var hrangle = map(hr,0,60,0,360);
  arc(0,0,340,340,0,hrangle);

  push();
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();

  push();
  rotate(mnangle);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(hrangle);
  stroke("green");
  line(0,0,100,0);
  pop();

  }