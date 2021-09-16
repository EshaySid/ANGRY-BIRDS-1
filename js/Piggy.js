class Piggy{

    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:false,
        }
            this.piggy=Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.piggy);
    }
    
    display(){
      var angle=this.piggy.angle;
      var pos=this.piggy.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.w,this.h);
      pop();
    }
    }