
var complete = [];

var skipped = [];

function setup() {
  console.log(skipped.length);
}

function draw() {
  createCanvas(windowWidth, 710 + complete.length*8);
  background(86,6,140);
  fill(255);
  noStroke();
  textSize(20);
  textAlign(RIGHT);
  text("Mouse click to mark activity as complete", width-20, 50);
  text("Press any key to skip item", width-20, 100);
  fill(255,0,0);
  text("Skipped", width-20, 150);
  textAlign(LEFT);
  fill(255);
  text("Things to do: "+(toDo.length + skipped.length), 20, 50);
  text("Things completed: " +complete.length, 20, 100);
  fill(0,255,0);
  text("Completed", 20, 150);
  
  textSize(15);
  fill(0,255,0);
  textAlign(LEFT);
  for(var x = 0; x<complete.length; x++){
    text(complete[x], 20, (x*13)+170);
  }
  
  fill(255,0,0);
  textAlign(RIGHT);
  for(var y = 0; y<skipped.length; y++){
    text(skipped[y], width-20, (y*13)+170);
  }
  
  textSize(40);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  strokeWeight(5);
  if(toDo.length > 0){
    text("" + toDo[0], width/2, 710/2);
  } else {
    text("You have reached the end of the list.", width/2, 710/2);
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

