
var complete = [];

var skipped = [];

function setup() {
  console.log(skipped.length);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(86,6,140);
  fill(255);
  noStroke();
  textSize(20);
  textAlign(RIGHT);
  text("Mouse click to mark activity as complete", width-20, 50);
  text("Press any key to skip item", width-20, 100);
  textAlign(LEFT);
  text("Things to do: "+(toDo.length + skipped.length), 20, 50);
  text("Things completed: " +complete.length, 20, 100);
  
  textSize(10);
  fill(0,255,0);
  textAlign(LEFT);
  for(var x = 0; x<complete.length; x++){
    text("Complete: " + complete[x], 20, (x*10)+150);
  }
  
  fill(255,0,0);
  textAlign(RIGHT);
  for(var y = 0; y<skipped.length; y++){
    text("Skipped: " + skipped[y], width-20, (y*10)+150);
  }
  
  textSize(40);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(5);
  if(toDo.length > 0){
    text("" + toDo[0], width/2, height/2);
  } else {
    text("You have reached the end of the list", width/2, height/2);
  }
}

function mousePressed() {
  if(toDo.length > 0) {
    complete.push(toDo[0]);
  	toDo.shift();
  }
}

function keyPressed(){
  if(toDo.length > 0) {
  skipped.push(toDo[0]);
  toDo.shift();
  }
}
