img="";
Objects="";
status="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.position(300,100);

}

function preload(){
    img = loadImage('kitchen.jpeg');
    img = loadImage('living room.jpeg');
    img = loadImage('librabry.jpg');
    img = loadImage('playground.jpeg');
    img = loadImage('study tablee.jpg');

}
function draw(){
    image(img,0,0,640,420);
   fill("#eb4034");
   text("dog" , 45,75);
   noFill();
   stroke("#eb4034");
   rect(30,60,450,350);
}


function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detscting Objects ";

}