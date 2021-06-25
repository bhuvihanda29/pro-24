class STONE{

    constructor( x,y){

        var options={
            restitution:0.8,
            density:12,
            friction:0.9
            
        }
        this.stone=Matter.Bodies.rectangle(x,y,50,100,options)
        Matter.World.add(world,this.stone);
        this.w=50
        this.h=100
    }

    display(){
        
        stroke("white")
        fill("grey")
        rectMode(CENTER)
        rect(this.stone.position.x,this.stone.position.y,this.w,this.h);

    }
}