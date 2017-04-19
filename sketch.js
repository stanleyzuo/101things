
var complete = [];

var skipped = [];

function setup() {
  console.log(skipped.length);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(86,6,140);
  fill(255);
  textSize(20);
  text("Mouse click to mark activity as complete", width/1.5, 50);
  text("Press any key to skip item", width/1.5, 100);
  text("Things to do: "+(toDo.length + skipped.length),  10, 50);
  text("Things completed: " +complete.length, 10, 100);
  
  fill(255,0,0);
  // for(var i = 0; i<toDo.length; i++){
    text("" + toDo[0], width/4, 100);
  // }
  
  fill(0,255,0);
  for(var x = 0; x<complete.length; x++){
    text("Complete: " + complete[x], 10, (x*20)+150);
  }
}

function mousePressed() {
	complete.push(toDo[0]);
	toDo.shift();
}

function keyPressed(){
  skipped.push(toDo[0]);
  toDo.shift();
}