img="";
img1="";
img2="";
img3="";
img4="";
Objects="";
status="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.position(300,100);

}

function preload(){
    img = loadImage('kitchen.jpeg');
    img1 = loadImage('living room.jpeg');
    img2 = loadImage('librabry.jpg');
    img3 = loadImage('playground.jpeg');
    img4 = loadImage('study tablee.jpg');

}


function setup(){
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detscting Objects ";

}

function  modelLoaded(){
    console.log("model Loaded");
    status = true;
    objectDetector.detect(gotResult);

}


function gotResult(error , results) {
    if (error){
        console.log(error);
    }
    console.log(results);
}
