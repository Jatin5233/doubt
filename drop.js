class Drop{
    constructor(x,y){
        var options = {
         isStatic:false,
            friction:0.1,
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,25,options);
        this.r=15;
        this.Visiblity=255;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    var angle = this.body.angle;
        push();
       // this.Visiblity = this.Visiblity - 5;
    // tint(255,this.Visiblity);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0,0,255);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,30);
        pop();
    }
      update(){
          if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-10,0)});
          }
          
      }
  
    
}