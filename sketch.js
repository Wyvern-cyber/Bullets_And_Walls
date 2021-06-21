var bullet;  
var b, bImg;
var wall ;
var speed;
var weight;
var sound;
var thickness;

function preload(){
//bulletImg=loadImage("bullet.svg");
bImg=loadImage("road.jpg");
sound=loadSound("s.mp3");
}

function setup() {
  createCanvas(1300,400);
 //b=createSprite(0,100);
 //b.addImage(bImg);
 //b.scale=1.7;

  bullet=createSprite(100, 100, 50, 5);
//   bullet.addImage(bulletImg);
//  bullet.scale=0.1;
bullet.shapeColor="deepskyblue";


  //bullet.debug=true;

  wall=createSprite(1200,200,30,500);
wall.shapeColor="#964B00";
}

function draw() {
  background(	'#000000');  
if(keyDown("a")){
  //sound.play();
  thickness=random(18,80);
  wall.width=thickness;
 
  speed=random(55,90);
 
  weight=random(400,1500);
  bullet.shapeColor="deepskyblue";
  wall.shapeColor="#964B00";
  bullet.x=100;
  bullet.y=100;
  bullet.velocityX=speed;

}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

  d=0.5*weight*speed*speed/(thickness*thickness*thickness)

      if(d<10){
      wall.shapeColor="red";
    }
  
    else if(d>10){
      wall.shapeColor="greenyellow";
    }
}


//bullet.collide(wall);

  // if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  //   bullet.velocityX=0;

  //   d=0.5*weight*speed*speed/22500;



  // }
  drawSprites();
}

function hasCollided(obj1, obj2){
  brl=obj1.x+obj1.width;
  wle=wall.x;
  if(brl>=wle){
    return true;
  }
  return false;
}