img="";
function setup(){
    canvas = createCanvas(640,420);
    canvas.position(300,100);

}

function preload(){
    img = loadImage('dog_cat.jpg');

}
function draw(){
    image(img,0,0,640,420);
   fill("#eb4034");
   text("dog" , 45,75);
   noFill();
   stroke("#eb4034");
   rect(30,60,450,350);
}
