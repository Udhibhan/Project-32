const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    backgroundImg = loadImage(bg);
    getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    fill("black");
    stroke(3);
    text("Time =" + hour, 200,200);
}

async function getBackgroundImg(){

    var bgtime = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var bgtimejson = await bgtime.json();

    var datetime = bgtimejson.datetime;

    var hour = datetime.slice(11,13);

    //console.log(hour);
    
    if(hour >= 06 && hour <= 7){
        bg = "sprites/sunrise1.png";
    }
    if(hour >= 07 && hour <= 8){
        bg = "sprites/sunrise2.png";
    }
    if(hour >= 08 && hour <= 9){
        bg = "sprites/sunrise3.png";
    }
    if(hour >= 09 && hour <= 10){
        bg = "sprites/sunrise4.png";
    }
    if(hour >= 10 && hour <= 11){
        bg = "sprites/sunrise5.png";
    }
    if(hour >= 11 && hour <= 12){
        bg = "sprites/sunrise6.png";
    }
    if(hour >= 12 && hour <= 13){
        bg = "sprites/sunrise7.png";
    }
    if(hour >= 13 && hour <= 14){
        bg = "sprites/sunrise8.png";
    }
    if(hour >= 14 && hour <= 15){
        bg = "sprites/sunrise9.png";
    }
    if(hour >= 15 && hour <= 16){
        bg = "sprites/sunrise10.png";
    }
    if(hour >= 16 && hour <= 17){
        bg = "sprites/sunrise11.png";
    }
    else{
        bg = "sprites/sunrise12.png";
    }

}
