var foodS,foodStock;
var database

function preload()
{
dogImg = loadImage("dogImg.png");
dogImg1 = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food Remaining:"+foodS,170,200);
  textSize(13);
  text("note:Press UP Arrow To Feed Milk",130,10,300,20);
  //add styles here

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
if(x<=0){
  x = 0;
}
else{
  x = x-1;
}
database.ref('/').update({
  food:x
})
}