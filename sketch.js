
const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world
var grd,ball

function setup() {
  createCanvas(800,400)
engine = Engine.create();
world = engine.world
var grd_options = {

isStatic : true

}

  grd = Bodies.rectangle(200, 390, 200, 20,grd_options);
  World.add(world,grd)

  var ball_options = {
  restitution : 1.5
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
}


function draw() {
  background(255,255,255);  

  Engine.update(engine)

rectMode(CENTER)
rect(grd.position.x,grd.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}