var  divisionss=[]
var  plinkos=[]
var  particles=[]
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  
  for (var j =40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }  
  for (var division = 40; division <=480; division = division + 40) {
    divisionss.push(new Division(division, 600, 10, divisionHeight))
  }
}

function draw() {
  background("black");
  Engine.update(engine)
  
  //console.log(rand)

  if(frameCount%90===0){
    console.log("hello")
  particles.push(new Particle(random(1,480),-10))
  }

  drawSprites();
  for(var i=0; i < divisionss.length;i=i+1){
     divisionss[i].display()
  }
  for(var a=0; a < plinkos.length;a=a+1){
    plinkos[a].display()
  }
  for(var b=0; b < particles.length;b=b+1){
    particles[b].display()
  }
}
