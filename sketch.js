//Create variables here
var dog;
var happydog;
var Food;
var database;
var foodStock;

function preload()
{
	//load images here
  loadImage("dog");
  loadImage("happydog");
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,400,20,20);
}


function draw() {  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
   writeStock(Food5);
   dog.addImage(happydog);
  }
  
  drawSprites();
  //add styles here

}
function readStock(data){
  Food5=data.val();
}

function writeStock(X){
  database.ref('/').update({
    Food:x
  })
}

