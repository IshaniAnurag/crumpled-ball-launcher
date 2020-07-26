class bars{
    constructor(x,y,width,height){
      var bars_option={
            isStatic:true
          
        }
        this.body=Bodies.rectangle(x,y,width,height,bars_option);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

        
    }
}