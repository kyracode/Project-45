var bg, bgImg;
var ship1, ship1Img;
var ship2, ship2Img;
var satellite;
var star, starImg, star2Img;
var score1 = 0;
var score2 = 0;
var stars, stars2;
var obstacle, obstacles;
var life = 3;
var life2 = 3;
var asteroid, satellite;
var gameoverImg, restartImg, winImg;
var gameover, restart, win;

function preload(){
  bgImg = loadImage("space.jpeg");
  ship1Img = loadImage("red spaceship.png");
  ship2Img = loadImage("green.png");
  starImg = loadImage("star2.png");
  star2Img = loadImage("star1.png");
  satellite = loadImage("satellite.png");
  asteroid = loadImage("asteroid.png");
  gameoverImg = loadImage("Game_Over.png")
  restartImg = loadImage("restart.png")
  winImg = loadImage("youwin.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(300, 100);
  bg.addImage(bgImg);
  bg.scale = 4.5;
  bg.velocityY = 2.5;

  ship1 = createSprite(windowWidth / 3 - 75, windowHeight - 100)
  ship1.addImage(ship1Img);
  ship1.scale = 0.25;

  ship2 = createSprite(windowWidth / 2 + 250, windowHeight - 100)
  ship2.addImage(ship2Img);
  ship2.scale = 0.22;

  stars = createGroup();
  stars2 = createGroup();
  obstacles = createGroup();
}

function draw() {
  //trex.debug = true;
  background("yellow");
  
  if (bg.y > windowHeight){
    bg.y = windowHeight / 2;
  }
  
  if(keyDown("RIGHT_ARROW")){
  ship2.x = ship2.x + 5;
  }
  
  if(keyDown("LEFT_ARROW")){
    ship2.x = ship2.x - 5;
  }

  if(keyDown("UP_ARROW")){
    ship2.y = ship2.y - 5;
  }

  if(keyDown("DOWN_ARROW")){
    ship2.y = ship2.y + 5;
  }

  if(keyDown("a")){
    ship1.x = ship1.x - 5;
  }

  if(keyDown("d")){
    ship1.x = ship1.x + 5;
  }

  if(keyDown("w")){
    ship1.y = ship1.y - 5;
  }

  if(keyDown("s")){
    ship1.y = ship1.y + 5;
  }

  spawnObstacles();
  spawnStar();
  spawnStar2();
  
  if (ship1.isTouching(stars)){
    score1 = score1 + 1;
    stars.destroyEach();
  }
  
  if (ship2.isTouching(stars)){
    score2 = score2 + 1;
    stars.destroyEach();
  }

  if (ship1.isTouching(stars2)){
    score1 = score1 + 1;
    stars2.destroyEach();
  }
  
  if (ship2.isTouching(stars2)){
    score2 = score2 + 1;
    stars2.destroyEach();
  }

  drawSprites();
  textSize(30);
  text("Red Score: " + score1, windowWidth - 270, 100);
  text("Green Score: " + score2, windowWidth - 270, 150);
}

function spawnStar(){
  if (frameCount % 100 == 0){
    star1 = createSprite(Math.round(random(50, windowWidth - 50)), 0);
    star1.scale = 0.08;
    star1.velocityY = 4;
    var ran = Math.round(random(1, 2));
    console.log(ran);
    if (ran == 1){
      star1.addImage(starImg);
    }
    else{
      star1.addImage(star2Img);
    }
    star1.lifetime = windowHeight / 3;
    stars.add(star1);
  }
}

function spawnStar2(){
  if (frameCount % 100 == 0){
    star2 = createSprite(Math.round(random(50, windowWidth - 50)), 0);
    star2.scale = 0.08;
    star2.velocityY = 4;
    var ran = Math.round(random(1, 2));
    console.log(ran);
    if (ran == 1){
      star2.addImage(starImg);
    }
    else{
      star2.addImage(star2Img);
    }
    star2.lifetime = windowHeight / 3;
    stars2.add(star2);
  }
}

function spawnObstacles(){
  if (frameCount % 100 == 0){
    obstacle = createSprite(Math.round(random(50, windowWidth - 50)), 0);
    obstacle.scale = 0.4;
    obstacle.velocityY = 4.5;
    var ran = Math.round(random(1, 2));
    console.log(ran);
    if (ran == 1){
      obstacle.addImage(asteroid);
    } 
    else{
      obstacle.addImage(satellite);
    }
    obstacle.lifetime = windowHeight / 3;
    obstacles.add(obstacle);
  }
}