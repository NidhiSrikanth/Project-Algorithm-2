var fixRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixRect= createSprite(200, 200, 50, 80);
  fixRect.shapeColor= "blue";
  fixRect.debug=true;
  //fixRect.velocityX=2;
  
  movingRect= createSprite(400,200,80,50);
  movingRect.shapeColor= "Red";
  movingRect.debug=true;
  //movingRect.velocityX=-2;
  
}

function draw() {
  background(0);  
  drawSprites();
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if(isTouching (movingRect,fixRect)){
   movingRect. shapeColor= "pink";
   fixRect. shapeColor= "purple";
  }
  else{
    movingRect.shapeColor="red";
    fixRect.shapeColor="green";
  }
  

//bounceOff();
  
}

