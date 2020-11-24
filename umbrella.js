class Umbrella{
    constructor(x,y){
var options={
    isStatic:true
}
this.body=Bodies.circle(x,y,500,options);
this.image=loadImage("Umbrella.png");
this.r=100;
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
            push();
            
            translate(pos.x, pos.y);
            rotate(angle);
           image(this.image,0,0,this.r)
            pop();
    }
}