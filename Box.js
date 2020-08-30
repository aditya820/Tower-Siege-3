class Box{
  constructor(x,y,width,height,color){
    var options_box = {
      isStatic : false
    }

    this.body = Bodies.rectangle(x,y,width,height,options_box);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;
    this.score = 0;
    this.angle = this.body.angle;

    World.add(world, this.body);
  }

  display(){
    textSize(25);
      stroke("white");
      fill("white");
      text("Score:" + this.score,100,350);
    if(this.body.speed < 10){
      stroke("black");
    var BoxPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(BoxPos.x, BoxPos.y);
    rotate(this.angle);
    fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility -= 5;
      this.score = this.score + 1;
      //tint(255, this.visibility);
      //rect(0,0,this.width,this.height);
      pop();
    }
  }
}