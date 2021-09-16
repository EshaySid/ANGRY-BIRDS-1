class Bird{

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
            this.bird=Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.bird);
    }
    
    display(){
        this.bird.position.x= mouseX;
        this.bird.position.y=mouseY;
      var angle=this.bird.angle;
      var pos=this.bird.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.w,this.h);
      pop();
    }
    }