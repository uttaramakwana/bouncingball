const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  //creating the body
  ground = Bodies.rectangle(200,390,200,20,options);

  //add the body to the world
  World.add(world,ground);
var balloptions = {
  restitution:1
}
 ball = Bodies.circle(200,100,20,balloptions);

 World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  var pos = ground.position;
  var ballpos = ball.position;

  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ballpos.x,ballpos.y,20,20);
}