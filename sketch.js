var hero,heroImage;
var enemy,enemyImage;
var bg,bgImg;

function preload() {
heroImage = loadImage("hero.png")
enemyImage = loadImage("monster.png")
bgImg = loadImage("sky.png")

}

function setup() {
  createCanvas(1535, 720);
  
 hero = createsprites(200,200,50,50)
 hero.addImage(heroImage)





}

function draw() {
  background(bgImg);

}

