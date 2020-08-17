class Bo {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'density':2,
          friction : 6,
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box.png");
      
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed <4){

        var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      rect(0,0, this.width, this.height);
      pop();
      
     
      
      }
       else{
        World.remove(world, this.body);
        push();
        
            this.visiblity = this.visiblity - 0.1;
            
            tint(255,this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            score = score+1
            pop();
        }
    }

     
      
    
}
