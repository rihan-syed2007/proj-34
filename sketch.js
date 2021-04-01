const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;

function preload() {
//preload the images here
  backgroundImg=loadImage("image/16631921.jpg");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(500,600,1000,20);
  hero = new Hero(100000,100,30,30);

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

ground.display();
hero.display();


}

