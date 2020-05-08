var box1,triangle1
var box2,triangle2



function setup() {
  createCanvas(800,400);
  
box1 = new box(30,150,20,250)
box2 = new box(150,150,20,250)
triangle1 = new triangleimg(65,200,95,150,125,200)
}

function draw() {
  background("orange");  
  drawSprites();
  box1.display();
  box2.display();
  triangle1.display();
}