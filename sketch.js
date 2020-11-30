
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var packageBody,box1,bpx2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	 
	fill("white");
    ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
     World.add(world, ground);
	//Create the Bodies Here.
	box1= new Box(805,420,30,100);

	box2=new Box(1095,420,30,100);
	box3=new Box(950,455,315,30);
	
    ball1=new Ball(200,400,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  rect(width/2,475,width,10);
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  drawSprites();
 
}

function keyPressed() {

}

