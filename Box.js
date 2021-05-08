class Box {
    constructor(x,y,width,height){
        var options = {
            restitution : 0.4,
            friction : 0,
            astatic : false,
        }
        this.width = width;
        this.visiblity = 205;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      
      }else{
        World.remove(world,this.body);
        push();
        this.visiblity =this.visiblity - 5;
        pop();
      }
      }
}