
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;



function preload(){
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,200,200,20);

	var bobDiameter =40;

	//Create the Bodies Here.
	bob1=new Bob(200,600,bobDiameter);
	

	
	rope1 = new Rope(bob1.body, roof.body,-bobDiameter*2, 0);
	//rope2 = new Rope(bob2.body, roof.body,-bobDiameter*1, 0);

	console.log(bob1.body.position);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  bob1.display();
//   bob2.display();
//   bob3.display();
//   bob4.display();
//   bob5.display();

  roof.display();

  rope1.display();
  //rope2.display();
  drawSprites();
 
}


