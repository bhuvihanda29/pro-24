class Iron{
    constructor(x,y){

        var options={
            restitution:0.8,
            density:30,
            friction:3
            
        }
        this.iron=Matter.Bodies.rectangle(x,y,40,80,options)
        Matter.World.add(world,this.iron);
        this.w=40
        this.h=80
    }

    display(){
        
        stroke("white")
        fill("silver")
        rectMode(CENTER)
        rect(this.iron.position.x,this.iron.position.y,this.w,this.h);

    }
}


