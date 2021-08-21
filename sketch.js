
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbin1 = new Dustbin(600,650,5,75);
	//dustbin2 = new Dustbin(700,650,5,75);
	dustbin1 = new Dustbin(620,610,25,150);
	
	paper = new Paper(100,100);
	//paper = new Paper(100,60,10);
	ground = new Ground(400,690,800,10)
	Engine.run(engine);
	
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
		
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  fill("white")
  paper.display();
  
  //ground.display();
  
  //ellipseMode(RADIUS);
  //var cir = ellipse(100,600,20,20)
  drawSprites();
  
  
	
}





