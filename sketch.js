const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var batman,batman_1;
var bg_1,bg;
var tGroup;
var drops=[];
var umbri;
var d;
var md=100;
function preload(){
     batman_1=loadImage("batman.png");
     bg_1=loadImage("batmanBegins.jpg")
}

function setup(){
    var canvas=createCanvas(400,400);
        engine = Engine.create();
        world = engine.world;

        

        bg=createSprite(200,200);
        bg.addImage(bg_1);
        bg.scale=0.4;
        
      
        batman=createSprite(100,280);
        batman.addImage(batman_1);
        batman.scale=0.6;
       
                umbri=new Umbrella(70,150);
                
                for(var i=0;i<md;i++){
                    drops.push(new Drop(random(0,400),random(0,400)))
                        }
               

        Engine.run(engine);
}

function draw(){
    background(0);
    
    
    Engine.update(engine);
  
    
    drawSprites();
  for(var i=0;i<md;i++){
      drops[i].display();
      drops[i].update();
      console.log(drops[i]);
  }
    umbri.display();
}   

