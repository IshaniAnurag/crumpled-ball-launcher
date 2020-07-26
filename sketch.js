
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1;
var GROUND;
var dustbin
var launcher1;

function preload()
{
 //dustbinimage=loadImage("sprites/dustbingreen.png")
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
GROUND=new ground(400,650,800,10);
dustbin=new bars (650,605,70,100);
//dustbin2=new bars(560,595,10,100);
//dustbin3=new bars(740,595,10,100);
ball1=new balls(40,645);
launcher1=new launcher(ball1.body,{x:200,y:300});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(254, 228, 195);

  GROUND.display();
  dustbin.display();
 // dustbin2.display();
  //dustbin3.display();
  ball1.display();
  
 
  drawSprites();
 
}

//function keyPressed(){
 // if(keyCode===UP_ARROW){
 //   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:90,y:-100});
  //}
//}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher1.fly();
}