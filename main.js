img="";
img1="";
img2="";
img3="";
img4="";
Status="";
objects = [];


function setup(){
    canvas = createCanvas(640,420);
    canvas.position(300,100);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload(){
    img = loadImage('kitchen.jpeg');
    img1 = loadImage('living room.jpeg');
    img2 = loadImage('librabry.jpg');
    img3 = loadImage('playground.jpeg');
    img4 = loadImage('study tablee.jpg');

}
function draw() {
    
    if (Status != "") {
        image(img,img1,img2,img3,img4, 0, 0, 640, 420);
 for (var i = 0; i < objects.length; i++ )
  {
           
            fill("#FF0000");
            document.getElementById("status").innerHTML = "Status : Objects Detected ";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



function  modelLoaded(){
    console.log("model Loaded");
    Status = true;
    objectDetector.detect(gotResult);

}


function gotResult(error , results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
