
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Boy;
var ground ;
var TREE , tree_1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stoneObj
var flyer;

function preload()
{
tree_1 = loadImage("image1/tree.png")	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	



	Boy = new child(200,520,20,100)

	

	mango1 = new fruit(920,330,40,40)
	mango2 = new fruit(920,270,40,40)
	mango3 = new fruit(960,220,40,40)
	mango4 = new fruit(980,300,40,40)
	mango5 = new fruit(1000,170,40,40)
	mango6 = new fruit(1080,215,40,40)
	mango7 = new fruit(1040,300,40,40)
	mango8 = new fruit(1100,270,40,40)
	mango9 = new fruit(1140,320,40,40)
	mango10 = new fruit(1020,240,40,40)
	


	ground = new floor(700,600,1400,10)

	stoneObj = new stn(140,470,30,30,PI/2)

	flyer = new thrower(stoneObj.body,{x:140, y:470})


	TREE = createSprite(1000,360,150,550)
	TREE.addImage(tree_1)
	TREE.scale = 0.4

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
	background("lightgreen");

 
	detectCollision(stoneObj,mango1)
	detectCollision(stoneObj,mango2)
	detectCollision(stoneObj,mango3)
	detectCollision(stoneObj,mango4)
	detectCollision(stoneObj,mango5)
	detectCollision(stoneObj,mango6)
	detectCollision(stoneObj,mango7)
	detectCollision(stoneObj,mango8)
	detectCollision(stoneObj,mango9)
	detectCollision(stoneObj,mango10)


  

Boy.display();

stoneObj.display();



mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();

ground.display();

flyer.display();
  


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    flyer.gone();
}

function detectCollision(stone, mango){

stonepost = stone.body.position
mangopost = mango.body.position

var distance = dist(stonepost.x, stonepost.y, mangopost.x, mangopost.y)

if(distance>=mango.r + stone.r){

Matter.Body.setStatic(mango.body, false)

}
}

function keyPressed() {

if(keyCode === 32){

Matter.Body.setPosition(stoneObj.body,{x:140, y:470})
flyer.attach(stoneObj.body)


}



}