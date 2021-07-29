class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          supar(x,y,50,50);
          this.image = loadImage("block.png");
          this.visibility=255;
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display()}
    if(this.body.speed<3){
      super.display();
    }
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    else{
      world.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      Tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      Pop();
      
        
    }
}