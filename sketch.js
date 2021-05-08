const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var box1, box2, box3, box4, box5, box6, box7, box8, stand, ball1;
var polygon, sling;
var engine,world;
var box9,box10,box11,box12,box13,box14,box15,box16;
var polygonIMG;
var bg = "day.png";
var backgroundIMG;
function preload(){
polygonIMG = loadImage("polygon.png");

GetbackgroundIMG();
}

function setup() {
  createCanvas(1600, 400);
  engine = Engine.create();
  world = engine.world;
  stand= new Ground(1000,300,200,25);
  Engine.run(engine);

  ball1 = Bodies.circle(200,200,20);
  World.add(world,ball1);

  box1 = new Box(1050,275,25,25)
  box2 = new Box(1025,275,25,25)
  box3 = new Box(1000,275,25,25)
  box4 = new Box(975,275,25,25)
  box5 = new Box(950,275,25,25)
  box6 = new Box(925,275,25,25)
  box7 = new Box(1075,275,25,25)

  box8 = new Box(950,250,25,25)
  box9 = new Box(975,250,25,25)
  box10 = new Box(1000,250,25,25)
  box11 = new Box(1025,250,25,25)
  box12 = new Box(1050,250,25,25)


  box13 = new Box(975,225,25,25)
  box14 = new Box(1000,225,25,25)
  box15 = new Box(1025,225,25,25)

  box16 = new Box(1000,200,25,25)

  sling = new launcher(this.ball1,{x:200,y:200});
  Engine.run(engine);
}

function draw() {
  if(backgroundIMG){
    background(backgroundIMG);
  }
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 30);
  stand.display();
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("yellow");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("green");
  box13.display();
  box14.display();
  box15.display();
  
  fill("orange");
  box16.display();

  sling.display();
  imageMode(CENTER);
   image(polygonIMG,ball1.position.x,ball1.position.y,40,40);

  drawSprites(); }

  function mouseDragged(){
    Matter.Body.setPosition(this.ball1,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    sling.fly();
  }
  function keyPressed(){
    if(keyCode === 32 ){
      
      sling.attach(this.ball1);
    }
  }
  async function GetbackgroundIMG(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response1 = await response.json() 
    var day = response1.datetime;
    var hour = day.slice(11,13);
    if(hour >= 06 && hour <= 18){
      bg ="day.png";
    }else{
      bg = "dark.jpg";
    }
    backgroundIMG = loadImage(bg);
    console.log(bg);
    console.log(hour);
  }