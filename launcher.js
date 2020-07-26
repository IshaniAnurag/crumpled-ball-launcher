class launcher{
    constructor(bodyA,pointB){
        var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.01,
     length:25

        }
        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
fly(){
   this.launcher.bodyA=null;
}

    display(){
        if(this.launcher.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }   
    }
}