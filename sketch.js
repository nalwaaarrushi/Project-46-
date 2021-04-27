var backgroundImage; 

var player1, player1Img, player2, player2Img, playerWinImg, playerHitImg; 

var leftNet, leftNetImg, rightNet, rightNetImg; 

var puck, puckImg; 

var edges; 

var gameState; 

function preload(){ 
  backgroundImage = loadImage("images/bg_img.jpg"); 
  leftNetImg = loadImage("images/left_net.png"); 
  rightNetImg = loadImage("images/right-net.png"); 
  puckImg = loadImage("images/puck.png"); 
  player1Img = loadAnimation("images/P_1hit.png", "images/p_right.png"); 
  player2Img = loadAnimation("images/P_1hit.png", "images/p_left.png"); 
  playerWinImg = loadAnimation("images/p_winhit.png"); 
  playerHitImg = loadAnimation("images/p_2hit.png"); 
}

function setup() {
  createCanvas(1000, 600);

  player1 = createSprite(300, 450, 20, 20); 
  player1.addAnimation("player1",player1Img); 
  player1.addAnimation("player_1", playerHitImg); 
  player1.addAnimation("player.1", playerWinImg); 

  player2 = createSprite(500, 100, 20, 20); 
  player2.addAnimation("player2", player2Img); 
  player2.addAnimation("player_2", playerHitImg); 
  player2.addAnimation("player.2", playerWinImg); 

  leftNet = createSprite(50, 300, 20, 20); 
  leftNet.addImage("leftNet",leftNetImg); 
  leftNet.scale = 0.4; 

  rightNet = createSprite(950, 300, 20, 20); 
  rightNet.addImage("rightNet",rightNetImg); 
  rightNet.scale = 0.5

  puck= createSprite(500, 300, 20, 20); 
  puck.addImage("puck",puckImg); 
  puck.scale = 0.1; 

  edges = createEdgeSprites(); 

}

function draw() {
  background(backgroundImage);  

  //controlling player 1 
  if(keyDown("a")){ 
    player1.x = player1.x-5; 
  }

  if(keyDown("s")){ 
    player1.y = player1.y+5; 
  }

  if(keyDown("d")){ 
    player1.y = player1.y-5; 
  }

  if(keyDown("w")){ 
    player1.x = player1.x+5; 
  }

  //controlling player 2 
  if(keyDown("up")){ 
    player2.y = player2.y-5; 
  }

  if(keyDown("down")){ 
    player2.y = player2.y+5; 
  }

  if(keyDown("left")){ 
    player2.x = player2.x-5; 
  }

  if(keyDown("right")){ 
    player2.x = player2.x+5; 
  }

  player1.collide(edges); 
  player2.collide(edges); 

  //releasing the puck
  if(keyDown("space")){
    puck.velocityX = 3; 
    puck.velocityY = 4; 
  }

  puck.bounceOff(edges); 

  drawSprites();
}

