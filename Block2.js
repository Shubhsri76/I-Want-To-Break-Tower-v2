class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0.1
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world, this.body);

      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(29, 222, 145));
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      }
    } 
  }