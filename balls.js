class balls{
    constructor(x,y){
        var ball_options={
            isStatic:false,
            restitution:0.85,
            friction:0,
            density:1.2
        }
       
        this.body=Bodies.circle(x,y,30,ball_options);
        this.radius=30;
        this.image=loadImage("sprites/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}