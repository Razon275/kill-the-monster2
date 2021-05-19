const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var BackGround,Monster1Image,Monster2Image,SuperheroImage;
var Superhero,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,fly;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var monster;
function preload()

{
	SuperheroImage=loadImage("images/Superhero-01.png")
	BackGround=loadImage("images/GamingBackground.png")
}

function setup() {
	createCanvas(2000, 800);
    
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    Superhero=new Hero(200,200,300,120)
    fly=new Fly(Superhero.body,{x:500,y:50})
    block1=new Block(1000,300,50,50)
	block2=new Block(950,300,50,50)
	block3=new Block(900,300,50,50)
	block4=new Block(1050,300,50,50)
	block5=new Block(1100,300,50,50)
	block6=new Block(1000,350,50,50)
	block7=new Block(950,350,50,50)
	block8=new Block(900,350,50,50)
	block9=new Block(1050,350,50,50)
	block10=new Block(1100,250,50,50)
	block11=new Block(1000,250,50,50)
	block12=new Block(950,250,50,50)
	block13=new Block(900,250,50,50)
	block14=new Block(1050,250,50,50)
	block15=new Block(1100,250,50,50)
    monster1=new Monster(1200,350,50,50)
	BlockGround=new Ground(1000,400,500,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(BackGround);
  Superhero.display();
  BlockGround.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  monster1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(Superhero.body,{x:mouseX,y:mouseY});
}