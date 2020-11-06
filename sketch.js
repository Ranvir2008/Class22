const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,ground,world;
function setup() {  

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(500,20,50,50,{isStatic:true});
  World.add(world,ground);

}

function draw() {
  background("black");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,50,50);
}