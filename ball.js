class Ball{

    constructor(x,y,radious){
 var options={

    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2 
}

        this.body=Bodies.circle(x,y,radious,options);
       this.radious=radious;
        World.add(world,this.body);
      
    }

    display(){

        var pos= this.body.position;
        rectMode(CENTER);
        fill("red");
        stroke("red");
        circle(pos.x,pos.y,this.radious); 
         if (keyWentDown(UP_ARROW) ) {
            // Loohe hints in the document and understand how to make the package body fall only on press of the Down arrow key.
         Matter.Body.applyForce(this.body,this.body.position,{x:485,y:-485});
         Matter.Body.setStatic(this.body, false);
         }
    }

}; 