class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
 
  }
display(){
  console.log(this.body.speed);
if(this.body.speed<4){
  super.display();
}else{
World.remove(world ,this.body);
}

}
};
