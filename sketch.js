
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world,engine;


function setup() {
	createCanvas(480, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	//Create a Ground

   for(var i=5;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }
  lastDiv=new Division(width-5,height-divisionHeight/2,10,divisionHeight)

  ground=new Ground(240,695,480,10)

  for(var b=15;b<width-15;b=b+40)
  plinkos.push(new Plinko(b,75))
for(var b=30;b<width-30;b=b+40)
  plinkos.push(new Plinko(b,130))
for(var b=15;b<width-15;b=b+40)
  plinkos.push(new Plinko(b,185))
for(var b=30;b<width-30;b=b+40)
  plinkos.push(new Plinko(b,240))
for(var b=15;b<width-15;b=b+40)
  plinkos.push(new Plinko(b,295))



	Engine.run(engine);
	
  
}


function draw(){
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),30))
  }
  background(0);
  ground.display()


for(var k=0;k<divisions.length;k++){
   divisions[k].display()
}
lastDiv.display()

for(var a=0;a<plinkos.length;a++){
  plinkos[a].display()
}
for(var b=0;b<particles.length;b++){
  particles[b].display()
}



}



