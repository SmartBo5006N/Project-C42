class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_3.png");
        this.bestmanImg = loadImage("Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;

        if (frameCount >= 150){
            image(this.bestmanImg, pos.x-75, pos.y-50, 150, 220);
        }

        else {
            image(this.image, pos.x-150, pos.y-75, 275, 275);
        }
    }
}