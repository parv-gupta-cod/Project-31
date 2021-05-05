class Particle{
    constructor(x,y,){
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1
    }
      this.body=Bodies.circle(x,y,10,options)
      this.radius=10
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world,this.body)
  }   
    display(){
      var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
  }
  }