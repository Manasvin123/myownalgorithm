function bounce(){

if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2){
    a.velocityY=1
    b.velocityY=-1
    b.velocityX=-1
    a.velocityX=1



}



}