var a
var b





function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
b=createSprite(400, 200, 50,50)




}

function draw() {
  background(255,255,255);  
  drawSprites();
  //b.x=mouseX
  //b.y=mouseY

console.log(b.x-a.x)
//algorithm();
bounce();
}
