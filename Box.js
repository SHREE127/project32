class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;

      this.Visiblity = 255;

      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        rect(this.body.position.x,this.body.position.y,this.width,this.height)    

       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         rect(this.body.position.x,this.body.position.y,this.width,this.height)    
         pop();
       }
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
}
