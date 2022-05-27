var BG,BGImg;
var player, shooterImg, shooter_shooting;
//Declare variable for zombie & for zombie Image
var vampire,vImg;

//Declare varible for 3 hearts
var heart1, heart2,heart3;
var heart1Img,heart2Img,heart3Img;

//declare variable to load 3 heart Image


//Declare variable for zombie group
var vampireGroup;


function preload()
{
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  BGImg = loadImage("BG.png")

  //Load heart Image
  heart1Img= loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");


  

  //load zombie img
  vImg = loadImage("vampire.png");

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  BG = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
BG.addImage(BGImg)
BG.scale = 1.5;
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
    heart1 = createSprite(displayWidth-150,40,20,20);
    heart1.addImage(heart1Img);
    heart1.scale = 0.4;
    heart1.visible = false;
    
    heart2 = createSprite(displayWidth-100,40,20,20);
    heart2.addImage(heart2Img);
    heart2.scale = 0.4;
    heart2.visible= false;

    heart3 = createSprite(displayWidth-150,40,20,20);
    heart3.addImage(heart3Img);
    heart3.scale = 0.4;

    //creating group for zombies    
    vampireGroup = new Group();
}

function draw() 
{
  background(0); 
  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+30
  }

  if(keyWentDown("space"))
  {
    player.addImage(shooter_shooting)
  }
  else if(keyWentUp("space"))
  {
    player.addImage(shooterImg)
  }

//destroy zombie when player touches it
 if(vampireGroup.isTouching(player))
 {
  for(var i = 0;i<vampireGroup.length;i++)
  {
    if(vampireGroup[i].isTouching(player))
    {
      vampireGroup[i].destroy();
    }
  }
 }

//calling the function to spawn zombies
spawnVampire();

drawSprites();
}



//creating function to spawn zombies
function spawnVampire()
{
  if(frameCount%50===0)
  {
    vampire = createSprite(random(500,1100),random(100,500),40,40);
    vampire.addImage(vImg);
    vampire.scale = 0.5;
    vampire.velocityX = -3;
    vampire.debug = true;
    vampire.setCollider("rectangle",0,0,400,400);
    vampire.lifetime = 400;
    vampireGroup.add(vampire);
  }
}