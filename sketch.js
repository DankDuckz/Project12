var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, apple
var oLeafImg, oLeaf
var rLeafImg, rLeaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  oLeafImg = loadImage("orangeLeaf.png")
  rLeafImg = loadImage("redImage.png")
}

function setup(){
  createCanvas(400,400);

  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  if (frameCount % 60 == 0) {
    num = Math.round(random(1,3))
    if (num == 1) {
      createApples()
    }
    else if (num == 2) {
      createOLeafs()
    }
    else {
      createRLeafs()
    }
  }
  
  rabbit.x = mouseX

  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples() {
  apple = createSprite(Math.round(random(50,350)),-100)
  apple.addImage(appleImg)
  apple.velocityY = 5
  apple.scale = 0.1
  if (frameCount % 360 == 0) {
    apple.remove()
  }
}

function createOLeafs() {
  oLeaf = createSprite(Math.round(random(50,350)),-100)
  oLeaf.addImage(oLeafImg)
  oLeaf.velocityY = 5
  oLeaf.scale = 0.1
  if (frameCount % 360 == 0) {
    oLeaf.remove()
  }
}

function createRLeafs() {
  rLeaf = createSprite(Math.round(random(50,350)),-100)
  rLeaf.addImage(rLeafImg)
  rLeaf.velocityY = 5
  rLeaf.scale = 0.1
  if (frameCount % 360 == 0) {
    rLeaf.remove()
  }
}