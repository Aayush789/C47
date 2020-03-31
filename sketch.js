var ghost,player;
var living_room_image;
var ghostImage;
var level = 0;
function preload(){
  living_room_image = loadImage('living room.jpg');
  ghostImage = loadImage('Ghost1.png');
  playerImage = loadImage("Boy.png");
  kitchenImage = loadImage("kitchen.jpg");
}


function setup() {
  createCanvas(1000,800);
  player = createSprite(500,700,30,30);
  player.addImage("player",playerImage)
  ghostGroup = new Group();
}

function draw() {

  if(keyDown("UP_ARROW")) {
    player.velocityX = 0;
    player.velocityY = -5;
  }
  if(keyDown("DOWN_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 5;
  }
  if(keyDown("RIGHT_ARROW")) {
    player.velocityX = 5;
    player.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    player.velocityX = -5;
    player.velocityY =  0;
  }

  spawnGhost();

  if (level ===0) {
    background(living_room_image);  
    if(player.isTouching(ghostGroup)) {
      level = 1
      
     }
    }

    if (level ===1) {
      background(kitchenImage);  
    if(player.isTouching(ghostGroup)) {
      level = 1
      
     }

    }


  drawSprites();
}

function spawnGhost() {
  if(frameCount %60===0) {
    var ghost = createSprite(500,50,50,50);
    ghost.addImage("Ghost",ghostImage);
    ghost.scale = 0.3;
    ghost.x = random(100,900);
    ghost.y = random(100,700);
    ghost.lifetime = 50;
    ghostGroup.add(ghost);
  }
}