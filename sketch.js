
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(900,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  groundObj.show();
  leftSide.show();
  rightSide.show();

  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:5});
	}
}


