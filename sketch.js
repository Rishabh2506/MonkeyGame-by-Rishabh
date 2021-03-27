
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,320,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  
  ground = createSprite(400,360,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  FoodGroup = createGroup();  
  obstacleGroup = createGroup();
  
}

function draw() {
 background(255);
  
  if (ground.x<0){
  ground.x = ground.width/2;  
  }
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY= monkey.velocityY +1;
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup);
  
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(120,200)),20,20);
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=105;
    FoodGroup.add(banana);
  }
  
  if(frameCount%300===0){
    obstacle = createSprite(400,340,20,20);
    obstacle.velocityX=-4;
    obstacle.lifetime=105; 
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.scale=0.1;
  }
  
 drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime: "+survivalTime,250,30);
}