var bg,bgImg,shooter,shooterImg,shooter_shooting,heart1,heart2,heart3,heart1Img,heart2Img,heart3Img,zombie,zombieImg,zombieGroup;
function preload(){
  bgImg=loadImage("assets/bg.jpeg");
  shooterImg=loadImage("assets/shooter_2.png");
  shooter_shooting=loadImage("assets/shooter_3.png");
heart1Img=loadImage("assets/heart_1.png");
heart2Img=loadImage("assets/heart_2.png");
heart3Img=loadImage("assets/heart_3.png");
zombieImg=loadImage("assets/zombie.png");
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 bg = createSprite(displayWidth/2,displayHeight/2,20,20);
 bg.addImage(bgImg);
 shooter = createSprite(displayWidth-1000,displayHeight-300,50,50);
 shooter.addImage(shooterImg);
 shooter.scale=0.5;
 shooter.debug = true;
 shooter.setCollider("rectangle",0,0,300,500);
 heart1 = createSprite(displayWidth-150,40,20,20);
heart1.addImage(heart1Img);
heart1.scale=0.3
 heart2 = createSprite(displayWidth-120,40,20,20);
 heart2.addImage(heart2Img);
 heart2.scale=0.3
 heart3 = createSprite(displayWidth-150,40,20,20);
 heart3.addImage(heart3Img);
 heart3.scale=0.3
zombieGroup=new Group();
}
function draw(){
background(0);
if(keyDown("W")||touches.length>0){
shooter.y = shooter.y-30;
}
if(keyDown("S")||touches.length>0){
  shooter.y = shooter.y +30;
  }
  if(keyWentDown("space")||touches.length>0){
   shooter.addImage(shooter_shooting);
    }
    else if(keyWentUp("space")||touches.length>0){
      shooter.addImage(shooterImg);
    }
if(zombieGroup.isTouching(shooter)){
for(var i = 0;i<zombieGroup.length;i++){
  if(zombieGroup[i].isTouching(shooter)){
    zombieGroup[i].destroy()
  }
}
}
enemy();
drawSprites();
}
function enemy(){
  if (frameCount%50 === 0){
    zombie = createSprite(random(500,1000),random(100,500),40,40);
zombie.addImage(zombieImg);
zombie.velocityX=-3;
zombie.scale=0.2;
zombie.lifetime = 400;
zombieGroup.add(zombie);
  }
}