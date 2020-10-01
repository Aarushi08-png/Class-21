var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "blue"
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "blue"
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "blue"
  object4 = createSprite(600,100,50,50);
  object4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  

  bounceOff(object1, movingRect);
  object1.x = mouseX;
  object1.y = mouseY;

  if(isTouching(object1,fixedRect)){
    object1.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }
else{
  object1.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}

if(isTouching(object1,object2)){
  object1.shapeColor = "orange";
  object2.shapeColor = "orange";
}
else{
object1.shapeColor = "yellow";
object2.shapeColor = "yellow";
}

  drawSprites();
}

