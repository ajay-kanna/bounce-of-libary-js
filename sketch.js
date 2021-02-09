var a,b;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,400);
  obj1 = createSprite(200, 200, 50, 50);
  obj2 = createSprite(300, 200, 50, 50);
  obj3 = createSprite(200, 100, 50, 50);
  obj4 = createSprite(200, 300, 50, 50);
  obj2.shapeColor="green";
  obj1.shapeColor="green";
  obj3.shapeColor = "green";
  obj4.shapeColor = "green";

  obj1.velocityX=4;
  obj2.velocityX=3;

}

function draw() {
  background(255,255,255); 
  obj2.y=World.mouseY;
  obj2.x=World.mouseX;
 
bounceof(obj1,obj2); 
  drawSprites();
}

